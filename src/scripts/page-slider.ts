import Swiper from 'swiper'
import { Mousewheel, Keyboard, HashNavigation, EffectCreative } from 'swiper/modules'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import 'swiper/css'
import 'swiper/css/effect-creative'

gsap.registerPlugin(SplitText)

const NAV_LINK_SELECTOR = '[data-nav-link]'
const SLIDE_SELECTOR = '[data-slide]'
const TEXT_SELECTOR = '.section-title, .section-subtitle'
/* Do not target glass parents (.hero__illustration, .faq__decoration):
   transform/filter/opacity on ancestors kill backdrop-filter. */
const VISUAL_SELECTOR =
  '.page-section__decor, .hero__currency, .about__illustration, .review__slider, .news__decoration'
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
}

const splitCache = new WeakMap<HTMLElement, SplitCache>()

const getTextUnits = (el: HTMLElement) => {
  const cached = splitCache.get(el)
  if (cached) return cached.units

  const isTitle = el.classList.contains('section-title')
  const split = SplitText.create(el, {
    type: isTitle ? 'words,lines' : 'lines,words',
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

  splitCache.set(el, { units })
  return units
}

const unitStagger = (count: number) => Math.min(0.045, 0.24 / Math.max(count, 1))

const setTextHidden = (slideEl: HTMLElement) => {
  slideEl.querySelectorAll<HTMLElement>(TEXT_SELECTOR).forEach((el) => {
    const units = getTextUnits(el)
    gsap.killTweensOf(units)
    gsap.set(units, { yPercent: 110 })
  })
}

const setTextVisible = (slideEl: HTMLElement) => {
  slideEl.querySelectorAll<HTMLElement>(TEXT_SELECTOR).forEach((el) => {
    const units = getTextUnits(el)
    gsap.killTweensOf(units)
    gsap.set(units, { yPercent: 0 })
  })
}

const revealText = (slideEl: HTMLElement, delay = 0) => {
  slideEl.querySelectorAll<HTMLElement>(TEXT_SELECTOR).forEach((el, index) => {
    const units = getTextUnits(el)
    if (!units.length) return

    gsap.fromTo(
      units,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 0.75,
        ease: 'power3.out',
        stagger: unitStagger(units.length),
        delay: delay + index * 0.06,
        overwrite: true,
      },
    )
  })
}

const concealText = (slideEl: HTMLElement) => {
  slideEl.querySelectorAll<HTMLElement>(TEXT_SELECTOR).forEach((el) => {
    const units = getTextUnits(el)
    if (!units.length) return

    gsap.to(units, {
      yPercent: -110,
      duration: 0.4,
      ease: 'power2.in',
      stagger: unitStagger(units.length) * 0.6,
      overwrite: true,
    })
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

  const swiper = new Swiper(slider, {
    modules: [Mousewheel, Keyboard, HashNavigation, EffectCreative],
    direction: 'vertical',
    speed: reduced ? 450 : 1000,
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
      replaceState: false,
    },
    mousewheel: {
      forceToAxis: true,
      releaseOnEdges: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      init: (swiperInstance) => {
        updateActiveNav(slides, swiperInstance.activeIndex)
        swiperInstance.slides.forEach((slide) => {
          if (slide instanceof HTMLElement) applySlideParallax(slide, slide.progress)
        })

        if (reduced) return

        void prepareTextSplits(slides, swiperInstance.activeIndex).then(() => {
          const active = slides[swiperInstance.activeIndex]
          if (active) revealText(active, 0.08)
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
          revealText(next, 0.2)
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

  window.addEventListener('resize', syncTouchMove)

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
