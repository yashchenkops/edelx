import Swiper from 'swiper'
import { Mousewheel, Keyboard, HashNavigation } from 'swiper/modules'
import 'swiper/css'

const NAV_LINK_SELECTOR = '[data-nav-link]'
const SLIDE_SELECTOR = '[data-slide]'
const TABLET_BREAKPOINT = 1024

const PARALLAX = {
  decor: 0.42,
  title: 0.28,
  content: 0.14,
}

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
  const opacity = 1 - Math.min(Math.abs(progress) * opacityFalloff, 0.8)
  const scale = 1 - Math.min(Math.abs(progress) * 0.06, 0.06)

  element.style.transform = `translate3d(0, ${translateY}%, 0) scale(${scale})`
  element.style.opacity = `${opacity}`

  if (duration !== undefined) {
    element.style.transitionDuration = `${duration}ms`
  }
}

const applySlideParallax = (slideEl: HTMLElement, progress: number, duration?: number) => {
  const decor = slideEl.querySelector<HTMLElement>('.page-section__decor')
  const title = slideEl.querySelector<HTMLElement>('.section-title')
  const inner = slideEl.querySelector<HTMLElement>('.page-section__inner')

  if (decor) setLayerMotion(decor, progress, PARALLAX.decor, 0.45, duration)
  if (title) setLayerMotion(title, progress, PARALLAX.title, 0.65, duration)

  inner?.querySelectorAll<HTMLElement>(':scope > *:not(.section-title)').forEach((element) => {
    setLayerMotion(element, progress, PARALLAX.content, 0.85, duration)
  })
}

export const initPageSlider = () => {
  const slider = document.querySelector<HTMLElement>('.page-slider')
  if (!slider) return

  const slides = Array.from(slider.querySelectorAll<HTMLElement>(SLIDE_SELECTOR))
  if (!slides.length) return

  const swiper = new Swiper(slider, {
    modules: [Mousewheel, Keyboard, HashNavigation],
    direction: 'vertical',
    speed: 1000,
    slidesPerView: 1,
    watchSlidesProgress: true,
    simulateTouch: false,
    allowTouchMove: isTouchSwipeEnabled(),
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
      },
      slideChange: ({ activeIndex }) => updateActiveNav(slides, activeIndex),
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
