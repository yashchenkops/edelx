import Swiper from 'swiper'
import { Mousewheel, Keyboard, HashNavigation, EffectCreative } from 'swiper/modules'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { whenAppReady } from '@/scripts/app-ready'
import 'swiper/css'
import 'swiper/css/effect-creative'

gsap.registerPlugin(SplitText)

const NAV_LINK_SELECTOR = '[data-nav-link]'
const SLIDE_SELECTOR = '[data-slide]'
const TEXT_SELECTOR = '.section-title, .section-subtitle'
const NESTED_TITLE_SLIDER = '[data-terms-titles]'

const getTextElements = (slideEl: HTMLElement) =>
  Array.from(slideEl.querySelectorAll<HTMLElement>(TEXT_SELECTOR)).filter(
    (el) => !el.closest(NESTED_TITLE_SLIDER),
  )

const VISUAL_SELECTOR =
  '.page-section__decor, .hero__currency, .about__illustration, .review__slider'
const TABLET_BREAKPOINT = 1024

const PARALLAX = {
  decor: 0.38,
  visual: 0.14,
}

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const isTouchSwipeEnabled = () =>
  window.matchMedia(`(max-width: ${TABLET_BREAKPOINT}px)`).matches ||
  window.matchMedia('(pointer: coarse)').matches ||
  navigator.maxTouchPoints > 0

const getNestedScrollEl = (slideEl: HTMLElement | undefined) => {
  if (!slideEl) return null
  if (!slideEl.matches('[data-fit="scroll"], .page-section--news')) return null
  return slideEl.querySelector<HTMLElement>('.page-section__scene')
}

const nestedScrollState = (el: HTMLElement) => {
  const top = el.scrollTop
  const max = el.scrollHeight - el.clientHeight
  return {
    canScroll: max > 1,
    atTop: top <= 1,
    atBottom: top >= max - 1,
  }
}

/** True when the nested block should consume this scroll direction. */
const shouldBlockPageSlide = (el: HTMLElement | null, deltaY: number) => {
  if (!el || deltaY === 0) return false
  const { canScroll, atTop, atBottom } = nestedScrollState(el)
  if (!canScroll) return false
  if (deltaY > 0) return !atBottom
  return !atTop
}

export type NestedWheelLock = {
  /**
   * Return true if the nested UI consumed the gesture (block page slide).
   * When `manualScroll` is true (mouse wheel), the lock should apply scroll itself.
   */
  handleWheel: (deltaY: number, manualScroll?: boolean) => boolean
}

const nestedWheelLocks = new WeakMap<HTMLElement, NestedWheelLock>()

/** Register nested wheel handling for a page slide (Terms titles, etc.). */
export const registerNestedWheelLock = (
  slideEl: HTMLElement,
  lock: NestedWheelLock,
) => {
  nestedWheelLocks.set(slideEl, lock)
}

const normalizeWheelDelta = (event: WheelEvent, fallbackPageSize: number) => {
  let delta = event.deltaY
  if (event.deltaMode === 1) delta *= 16
  if (event.deltaMode === 2) delta *= fallbackPageSize
  return delta
}

const updateActiveNav = (slides: HTMLElement[], activeIndex: number) => {
  const activeSlideId = slides[activeIndex]?.dataset.slide

  document.querySelectorAll<HTMLElement>(NAV_LINK_SELECTOR).forEach((link) => {
    link.classList.toggle('is-active', link.dataset.navLink === activeSlideId)
  })
}

const setLayerMotion = (
  element: HTMLElement,
  progress: number,
  factor: number,
  opacityFalloff: number,
  duration?: number,
) => {
  const translateY = progress * 100 * factor
  const opacity = 1 - Math.min(Math.abs(progress) * opacityFalloff, 0.7)
  const scale = 1 - Math.min(Math.abs(progress) * 0.04, 0.04)

  element.style.transform = `translate3d(0, ${translateY}%, 0) scale(${scale})`
  element.style.opacity = `${opacity}`

  if (duration !== undefined) {
    element.style.transitionDuration = `${duration}ms`
  }
}

const applySlideParallax = (slideEl: HTMLElement, progress: number, duration?: number) => {
  const decor = slideEl.querySelector<HTMLElement>('.page-section__decor')
  if (decor) setLayerMotion(decor, progress, PARALLAX.decor, 0.4, duration)

  const absProgress = Math.min(Math.abs(progress), 1)

  slideEl.querySelectorAll<HTMLElement>(VISUAL_SELECTOR).forEach((element) => {
    if (element === decor) return
    setLayerMotion(element, progress, PARALLAX.visual, 0.5, duration)
    element.style.filter = absProgress
      ? `blur(${absProgress * 6}px)`
      : ''
  })
}

type SplitCache = {
  units: Element[]
  split: SplitText
}

const splitCache = new WeakMap<HTMLElement, SplitCache>()

const getTextUnits = (el: HTMLElement) => {
  const cached = splitCache.get(el)
  if (cached) return cached.units

  const isTitle = el.classList.contains('section-title')
  const splitRoot =
    (isTitle ? el.querySelector<HTMLElement>('.section-title__label') : null) ?? el

  // Titles: words only — no line wrappers, so text reflows on resize.
  // Subtitles: lines for mask reveal.
  const split = SplitText.create(splitRoot, {
    type: isTitle ? 'words' : 'lines,words',
    mask: isTitle ? 'words' : 'lines',
    aria: 'auto',
    wordsClass: 'word',
    linesClass: 'line',
  })

  const units = isTitle
    ? split.words
    : split.lines.length
      ? split.lines
      : split.words

  splitCache.set(el, { units, split })
  return units
}

const revertTextSplits = (root: ParentNode = document) => {
  root.querySelectorAll<HTMLElement>(TEXT_SELECTOR).forEach((el) => {
    if (el.closest(NESTED_TITLE_SLIDER)) return
    const cached = splitCache.get(el)
    if (!cached) return
    gsap.killTweensOf(cached.units)
    cached.split.revert()
    splitCache.delete(el)
  })
}

const unitStagger = (count: number) => Math.min(0.045, 0.24 / Math.max(count, 1))

const getTitleMark = (el: HTMLElement) =>
  el.classList.contains('section-title')
    ? el.querySelector<HTMLElement>('.section-title__mark')
    : null

const setMarkHidden = (mark: HTMLElement) => {
  gsap.killTweensOf(mark)
  gsap.set(mark, { opacity: 0, scale: 0.35, rotate: -18 })
}

const setMarkVisible = (mark: HTMLElement) => {
  gsap.killTweensOf(mark)
  gsap.set(mark, { opacity: 1, scale: 1, rotate: 0 })
}

const revealMark = (mark: HTMLElement, delay = 0) => {
  gsap.fromTo(
    mark,
    { opacity: 0, scale: 0.3, rotate: -22 },
    {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 0.55,
      delay,
      ease: 'back.out(1.7)',
      overwrite: true,
    },
  )
}

const concealMark = (mark: HTMLElement) => {
  gsap.to(mark, {
    opacity: 0,
    scale: 0.45,
    rotate: 12,
    duration: 0.28,
    ease: 'power2.in',
    overwrite: true,
  })
}

const setTextHidden = (slideEl: HTMLElement) => {
  getTextElements(slideEl).forEach((el) => {
    const units = getTextUnits(el)
    gsap.killTweensOf(units)
    gsap.set(units, { yPercent: 110 })

    const mark = getTitleMark(el)
    if (mark) setMarkHidden(mark)
  })
}

const setTextVisible = (slideEl: HTMLElement) => {
  getTextElements(slideEl).forEach((el) => {
    const units = getTextUnits(el)
    gsap.killTweensOf(units)
    gsap.set(units, { yPercent: 0 })

    const mark = getTitleMark(el)
    if (mark) setMarkVisible(mark)
  })
}

const revealText = (slideEl: HTMLElement, delay = 0) => {
  getTextElements(slideEl).forEach((el, index) => {
    const units = getTextUnits(el)
    if (!units.length) return

    const itemDelay = delay + index * 0.05

    gsap.fromTo(
      units,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: unitStagger(units.length),
        delay: itemDelay,
        overwrite: true,
      },
    )

    const mark = getTitleMark(el)
    if (mark) revealMark(mark, itemDelay + 0.12)
  })
}

const concealText = (slideEl: HTMLElement) => {
  getTextElements(slideEl).forEach((el) => {
    const units = getTextUnits(el)
    if (!units.length) return

    gsap.to(units, {
      yPercent: -110,
      duration: 0.35,
      ease: 'power2.in',
      stagger: unitStagger(units.length) * 0.6,
      overwrite: true,
    })

    const mark = getTitleMark(el)
    if (mark) concealMark(mark)
  })
}

const prepareTextSplits = async (slides: HTMLElement[], activeIndex: number) => {
  await document.fonts.ready

  slides.forEach((slide, index) => {
    if (index === activeIndex) setTextVisible(slide)
    else setTextHidden(slide)
  })
}

export const initPageSlider = () => {
  const slider = document.querySelector<HTMLElement>('.page-slider')
  if (!slider) return

  const slides = Array.from(slider.querySelectorAll<HTMLElement>(SLIDE_SELECTOR))
  if (!slides.length) return

  const reduced = prefersReducedMotion()

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  window.scrollTo(0, 0)

  const hash = window.location.hash.replace(/^#/, '')
  const initialSlide = hash
    ? Math.max(
        0,
        slides.findIndex(
          (slide) => slide.dataset.hash === hash || slide.dataset.slide === hash,
        ),
      )
    : 0

  const swiper = new Swiper(slider, {
    modules: [Mousewheel, Keyboard, HashNavigation, EffectCreative],
    direction: 'vertical',
    speed: reduced ? 450 : 1000,
    initialSlide,
    slidesPerView: 1,
    watchSlidesProgress: true,
    simulateTouch: false,
    allowTouchMove: isTouchSwipeEnabled(),
    ...(reduced
      ? {}
      : {
          effect: 'creative',
          creativeEffect: {
            limitProgress: 1,
            perspective: true,
            shadowPerProgress: false,
            prev: {
              translate: [0, '-14%', -220],
              rotate: [6, 0, 0],
              scale: 0.94,
              opacity: 0,
            },
            next: {
              translate: [0, '14%', -220],
              rotate: [-6, 0, 0],
              scale: 0.94,
              opacity: 0,
            },
          },
        }),
    hashNavigation: {
      watchState: true,
      replaceState: true,
    },
    mousewheel: {
      enabled: false,
      forceToAxis: true,
      releaseOnEdges: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      init: (swiperInstance) => {
        if (swiperInstance.activeIndex !== initialSlide) {
          swiperInstance.slideTo(initialSlide, 0, false)
        }

        updateActiveNav(slides, swiperInstance.activeIndex)
        swiperInstance.slides.forEach((slide) => {
          if (slide instanceof HTMLElement) applySlideParallax(slide, slide.progress)
        })

        window.setTimeout(() => {
          void whenAppReady().then(() => {
            swiperInstance.mousewheel?.enable?.()
          })
        }, 350)

        if (reduced) return

        void prepareTextSplits(slides, swiperInstance.activeIndex).then(async () => {
          const active = slides[swiperInstance.activeIndex]
          if (active) setTextHidden(active)

          await whenAppReady()

          const current = slides[swiperInstance.activeIndex]
          if (current) revealText(current, 0)
        })
      },
      slideChange: ({ activeIndex }) => updateActiveNav(slides, activeIndex),
      slideChangeTransitionStart: (swiperInstance) => {
        if (reduced) return
        const prev = swiperInstance.slides[swiperInstance.previousIndex]
        const next = swiperInstance.slides[swiperInstance.activeIndex]
        if (prev instanceof HTMLElement) concealText(prev)
        if (next instanceof HTMLElement) {
          setTextHidden(next)
          revealText(next, 0.06)
        }
      },
      progress: (swiperInstance) => {
        swiperInstance.slides.forEach((slide) => {
          if (!(slide instanceof HTMLElement)) return
          applySlideParallax(slide, slide.progress)
        })
      },
      setTransition: (swiperInstance, duration) => {
        swiperInstance.slides.forEach((slide) => {
          if (!(slide instanceof HTMLElement)) return
          applySlideParallax(slide, slide.progress, duration)
          slide.style.transitionDuration = `${duration}ms`
          slide.style.transitionProperty = 'transform, opacity'
          slide.style.transitionTimingFunction = 'cubic-bezier(0.22, 1, 0.36, 1)'
        })
      },
    },
  })

  const syncTouchMove = () => {
    swiper.allowTouchMove = isTouchSwipeEnabled()
  }

  // Nested locks: News (overflow scroll) + registered controllers (Terms, …).
  const onNestedWheel = (event: WheelEvent) => {
    if (!event.deltaY) return
    const active = slides[swiper.activeIndex]
    if (!(active instanceof HTMLElement)) return

    const scrollEl = getNestedScrollEl(active)
    if (shouldBlockPageSlide(scrollEl, event.deltaY)) {
      const delta = normalizeWheelDelta(event, scrollEl!.clientHeight)
      event.preventDefault()
      event.stopImmediatePropagation()
      scrollEl!.scrollTop += delta
      return
    }

    // Hovered local scroll area (e.g. Terms text): native scroll only,
    // block page slide until that area reaches the matching edge.
    if (event.target instanceof Element) {
      const localRoot = event.target.closest('[data-nested-local-scroll]')
      if (localRoot instanceof HTMLElement && active.contains(localRoot)) {
        const localScrollEl =
          localRoot.matches('[data-terms-panel]')
            ? localRoot
            : localRoot.querySelector<HTMLElement>('[data-terms-panel]:not([hidden])')

        if (shouldBlockPageSlide(localScrollEl, event.deltaY)) {
          event.stopImmediatePropagation()
        }
        return
      }
    }

    const lock = nestedWheelLocks.get(active)
    if (!lock) return

    const delta = normalizeWheelDelta(event, active.clientHeight)
    if (!lock.handleWheel(delta, true)) return

    event.preventDefault()
    event.stopImmediatePropagation()
  }

  window.addEventListener('wheel', onNestedWheel, {
    capture: true,
    passive: false,
  })

  let touchStartY = 0
  const onNestedTouchStart = (event: TouchEvent) => {
    touchStartY = event.touches[0]?.clientY ?? 0
  }

  const onNestedTouchMove = (event: TouchEvent) => {
    const active = slides[swiper.activeIndex]
    if (!(active instanceof HTMLElement)) {
      syncTouchMove()
      return
    }

    const y = event.touches[0]?.clientY ?? touchStartY
    // Finger up => content scrolls down (positive deltaY equivalent).
    const deltaY = touchStartY - y

    const scrollEl = getNestedScrollEl(active)
    if (shouldBlockPageSlide(scrollEl, deltaY)) {
      swiper.allowTouchMove = false
      return
    }

    const touchTarget = event.target
    if (touchTarget instanceof Element) {
      const localRoot = touchTarget.closest('[data-nested-local-scroll]')
      if (localRoot instanceof HTMLElement && active.contains(localRoot)) {
        const localScrollEl =
          localRoot.matches('[data-terms-panel]')
            ? localRoot
            : localRoot.querySelector<HTMLElement>('[data-terms-panel]:not([hidden])')

        if (shouldBlockPageSlide(localScrollEl, deltaY)) {
          swiper.allowTouchMove = false
          return
        }

        syncTouchMove()
        return
      }
    }

    const lock = nestedWheelLocks.get(active)
    if (lock?.handleWheel(deltaY, false)) {
      swiper.allowTouchMove = false
      return
    }

    syncTouchMove()
  }

  const onNestedTouchEnd = () => {
    syncTouchMove()
  }

  slider.addEventListener('touchstart', onNestedTouchStart, { passive: true })
  slider.addEventListener('touchmove', onNestedTouchMove, { passive: true, capture: true })
  slider.addEventListener('touchend', onNestedTouchEnd, { passive: true })
  slider.addEventListener('touchcancel', onNestedTouchEnd, { passive: true })

  let resizeTimer = 0
  const onResize = () => {
    syncTouchMove()

    // Re-measure subtitle line wraps after layout changes.
    window.clearTimeout(resizeTimer)
    resizeTimer = window.setTimeout(() => {
      if (reduced) return
      const active = slides[swiper.activeIndex]
      if (!(active instanceof HTMLElement)) return

      revertTextSplits(active)
      void prepareTextSplits([active], 0).then(() => {
        if (slides[swiper.activeIndex] === active) setTextVisible(active)
      })
    }, 150)
  }

  window.addEventListener('resize', onResize)

  document.querySelectorAll<HTMLAnchorElement>(NAV_LINK_SELECTOR).forEach((link) => {
    link.addEventListener('click', (event) => {
      const slideId = link.dataset.navLink
      if (!slideId) return

      const index = slides.findIndex((slide) => slide.dataset.slide === slideId)
      if (index === -1) return

      event.preventDefault()
      swiper.slideTo(index)
    })
  })
}

initPageSlider()
