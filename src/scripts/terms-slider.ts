import Swiper from 'swiper'
import type { Swiper as SwiperInstance } from 'swiper'
import { gsap } from 'gsap'
import 'swiper/css'

const TABLET_BREAKPOINT = 1024
const SLIDE_SPEED = 700

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const isHorizontal = () =>
  window.matchMedia(`(max-width: ${TABLET_BREAKPOINT}px)`).matches

const getItems = (panel: HTMLElement) =>
  Array.from(panel.children) as HTMLElement[]

const hideItems = (items: HTMLElement[]) => {
  gsap.killTweensOf(items)
  gsap.set(items, {
    opacity: 0,
    y: 24,
    filter: 'blur(6px)',
  })
}

const playIn = (items: HTMLElement[], reduced: boolean) => {
  if (!items.length) return

  if (reduced) {
    gsap.to(items, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.25,
      overwrite: true,
    })
    return
  }

  gsap.fromTo(
    items,
    { opacity: 0, y: 24, filter: 'blur(6px)' },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.6,
      delay: 0.16,
      stagger: 0.05,
      ease: 'power3.out',
      overwrite: true,
    },
  )
}

const playOut = (items: HTMLElement[], reduced: boolean) => {
  if (!items.length) return

  gsap.to(items, {
    opacity: 0,
    y: -10,
    filter: 'blur(5px)',
    duration: reduced ? 0.2 : 0.22,
    stagger: 0.02,
    ease: 'power2.in',
    overwrite: true,
  })
}

const updateFooterOffset = () => {
  const footer = document.querySelector<HTMLElement>('.page-footer')
  const inner = document.querySelector<HTMLElement>('.terms-and-conditions__inner')
  if (!footer || !inner) return

  const footerH = footer.getBoundingClientRect().height
  inner.style.setProperty('--footer-offset', `${footerH + 80}px`)
}

const bindNestedScroll = (wrap: HTMLElement, getActive: () => HTMLElement | undefined) => {
  wrap.addEventListener(
    'wheel',
    (event) => {
      const el = getActive()
      if (!el) return

      const { scrollTop, scrollHeight, clientHeight } = el
      const atTop = scrollTop <= 0 && event.deltaY < 0
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && event.deltaY > 0

      if (!atTop && !atBottom) {
        event.stopPropagation()
        event.stopImmediatePropagation()
      }
    },
    { passive: false, capture: true },
  )

  let touchStartY = 0

  wrap.addEventListener(
    'touchstart',
    (event) => {
      touchStartY = event.touches[0]?.clientY ?? 0
    },
    { passive: true },
  )

  wrap.addEventListener(
    'touchmove',
    (event) => {
      const el = getActive()
      if (!el) return

      const dy = touchStartY - (event.touches[0]?.clientY ?? touchStartY)
      const { scrollTop, scrollHeight, clientHeight } = el
      const atTop = scrollTop <= 0 && dy < 0
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1 && dy > 0

      if (!atTop && !atBottom) {
        event.stopPropagation()
        event.stopImmediatePropagation()
      }
    },
    { passive: false, capture: true },
  )
}

const ACTIVE_COLOR = 'var(--color-text)'
const MUTED_COLOR = 'color-mix(in srgb, var(--color-text) 28%, transparent)'

const updateSlideVisuals = (instance: SwiperInstance) => {
  instance.slides.forEach((slide, index) => {
    if (!(slide instanceof HTMLElement)) return

    const isActive = index === instance.activeIndex
    slide.classList.toggle('is-active', isActive)

    const title = slide.querySelector<HTMLElement>('.section-title')
    const subtitle = slide.querySelector<HTMLElement>('.section-subtitle')
    const color = isActive ? ACTIVE_COLOR : MUTED_COLOR

    if (title) title.style.color = color
    if (subtitle) subtitle.style.color = color
  })
}

export const initTermsSlider = () => {
  const pageSlide = document.querySelector<HTMLElement>('[data-slide="terms-conditions"]')
  const titlesEl = document.querySelector<HTMLElement>('[data-terms-titles]')
  const wrap = document.querySelector<HTMLElement>('.terms-and-conditions__scroll-wrap')
  const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-terms-panel]'))

  updateFooterOffset()

  const slider = document.querySelector<HTMLElement>('.page-slider')
  const footerWrap = document.querySelector<HTMLElement>('.footer__wrap')

  if (slider) {
    new MutationObserver(updateFooterOffset).observe(slider, {
      subtree: true,
      attributeFilter: ['class'],
      childList: false,
    })
  }

  if (footerWrap) {
    new MutationObserver(updateFooterOffset).observe(footerWrap, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
    })
  }

  window.addEventListener('resize', updateFooterOffset)

  if (!pageSlide || !titlesEl || !wrap || !panels.length) return

  const reduced = prefersReducedMotion()
  let pageActive = pageSlide.classList.contains('swiper-slide-active')
  let played = false
  let activeIndex = 0
  let wheelLock = false

  panels.forEach((panel, index) => {
    panel.hidden = index !== 0
    hideItems(getItems(panel))
  })

  const getActivePanel = () => panels[activeIndex]

  const showPanel = (index: number, animate: boolean) => {
    const next = panels[index]
    if (!next) return

    const prev = panels[activeIndex]
    activeIndex = index

    if (prev && prev !== next) {
      prev.hidden = true
      hideItems(getItems(prev))
    }

    next.hidden = false
    next.scrollTop = 0

    if (animate && pageActive) {
      playIn(getItems(next), reduced)
      played = true
      return
    }

    if (pageActive) {
      gsap.set(getItems(next), { opacity: 1, y: 0, filter: 'blur(0px)' })
      played = true
      return
    }

    hideItems(getItems(next))
  }

  bindNestedScroll(wrap, getActivePanel)

  const swiper = new Swiper(titlesEl, {
    direction: isHorizontal() ? 'horizontal' : 'vertical',
    speed: reduced ? 280 : SLIDE_SPEED,
    slidesPerView: 'auto',
    centeredSlides: true,
    nested: true,
    observer: true,
    observeParents: true,
    grabCursor: true,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    resistanceRatio: 0.85,
    on: {
      init: (instance) => {
        updateSlideVisuals(instance)
      },
      setTranslate: (instance) => {
        updateSlideVisuals(instance)
      },
      slideChange: (instance) => {
        updateSlideVisuals(instance)
        if (instance.activeIndex === activeIndex) return
        showPanel(instance.activeIndex, true)
      },
      slideChangeTransitionEnd: (instance) => {
        updateSlideVisuals(instance)
      },
    },
  })

  titlesEl.addEventListener(
    'wheel',
    (event) => {
      if (isHorizontal()) return
      if (!pageActive) return

      event.preventDefault()
      event.stopPropagation()
      event.stopImmediatePropagation()

      if (wheelLock || swiper.animating) return
      if (Math.abs(event.deltaY) < 8) return

      wheelLock = true
      if (event.deltaY > 0) swiper.slideNext()
      else swiper.slidePrev()

      window.setTimeout(() => {
        wheelLock = false
      }, reduced ? 280 : SLIDE_SPEED)
    },
    { passive: false, capture: true },
  )

  const syncDirection = () => {
    const nextDirection = isHorizontal() ? 'horizontal' : 'vertical'
    if (swiper.params.direction !== nextDirection) {
      swiper.changeDirection(nextDirection)
    }
    swiper.update()
    updateSlideVisuals(swiper)
  }

  window.addEventListener('resize', syncDirection)

  const playPageIn = () => {
    swiper.update()
    updateSlideVisuals(swiper)
    showPanel(swiper.activeIndex, true)
  }

  const playPageOut = () => {
    if (!played) return
    const panel = getActivePanel()
    if (panel) playOut(getItems(panel), reduced)
  }

  const syncPage = () => {
    const nextActive = pageSlide.classList.contains('swiper-slide-active')
    if (nextActive === pageActive) return
    pageActive = nextActive
    if (nextActive) playPageIn()
    else playPageOut()
  }

  new MutationObserver(syncPage).observe(pageSlide, {
    attributes: true,
    attributeFilter: ['class'],
  })

  if (pageActive) playPageIn()
}

initTermsSlider()
