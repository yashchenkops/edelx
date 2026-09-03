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
const VISUAL_SELECTOR =
  '.page-section__decor, .hero__illustration, .about__illustration, .review__slider, .faq__decoration, .news__decoration'
const TABLET_BREAKPOINT = 1024

const PARALLAX = {
  decor: 0.5,
  visual: 0.18,
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
  const opacity = 1 - Math.min(Math.abs(progress) * opacityFalloff, 0.85)
  const scale = 1 - Math.min(Math.abs(progress) * 0.08, 0.08)

  element.style.transform = `translate3d(0, ${translateY}%, 0) scale(${scale})`
  element.style.opacity = `${opacity}`

  if (duration !== undefined) {
    element.style.transitionDuration = `${duration}ms`
  }
}

const applySlideParallax = (slideEl: HTMLElement, progress: number, duration?: number) => {
  const decor = slideEl.querySelector<HTMLElement>('.page-section__decor')
  if (decor) setLayerMotion(decor, progress, PARALLAX.decor, 0.45, duration)

  const absProgress = Math.min(Math.abs(progress), 1)

  slideEl.querySelectorAll<HTMLElement>(VISUAL_SELECTOR).forEach((element) => {
    if (element === decor) return
    setLayerMotion(element, progress, PARALLAX.visual, 0.55, duration)
    element.style.filter = `blur(${absProgress * 10}px) saturate(${1 - absProgress * 0.25})`
  })
}

type SplitCache = {
  chars: Element[]
}

const splitCache = new WeakMap<HTMLElement, SplitCache>()

const getChars = (el: HTMLElement) => {
  const cached = splitCache.get(el)
  if (cached) return cached.chars

  const split = SplitText.create(el, {
    type: 'words,chars',
    aria: 'auto',
  })

  gsap.set(el, { perspective: 400 })
  splitCache.set(el, { chars: split.chars })
  return split.chars
}

const charStagger = (count: number) =>
  count > 42 ? { amount: 0.42 } : 0.01

const animateCharsIn = (chars: Element[], delay = 0) => {
  gsap.fromTo(
    chars,
    {
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
    },
    {
      duration: 0.8,
      opacity: 1,
      scale: 1,
      y: 0,
      rotationX: 0,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: charStagger(chars.length),
      delay,
      overwrite: true,
    },
  )
}

const animateCharsOut = (chars: Element[]) => {
  gsap.to(chars, {
    duration: 0.45,
    opacity: 0,
    scale: 0,
    y: -36,
    rotationX: -120,
    transformOrigin: '0% 50% -50',
    ease: 'back.in',
    stagger: charStagger(chars.length),
    overwrite: true,
  })
}

const setCharsState = (slideEl: HTMLElement, visible: boolean) => {
  slideEl.querySelectorAll<HTMLElement>(TEXT_SELECTOR).forEach((el) => {
    const chars = getChars(el)
    gsap.set(chars, {
      opacity: visible ? 1 : 0,
      scale: visible ? 1 : 0,
      y: visible ? 0 : 80,
      rotationX: visible ? 0 : 180,
      transformOrigin: '0% 50% -50',
    })
  })
}

const animateSlideText = (slideEl: HTMLElement, direction: 'in' | 'out', delay = 0) => {
  slideEl.querySelectorAll<HTMLElement>(TEXT_SELECTOR).forEach((el) => {
    const chars = getChars(el)
    if (!chars.length) return
    if (direction === 'in') animateCharsIn(chars, delay)
    else animateCharsOut(chars)
  })
}

const prepareTextSplits = async (slides: HTMLElement[], activeIndex: number) => {
  await document.fonts.ready

  slides.forEach((slide, index) => {
    setCharsState(slide, index === activeIndex)
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
    speed: reduced ? 450 : 1150,
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
              translate: [0, '-12%', -280],
              rotate: [12, 0, -2],
              scale: 0.86,
              opacity: 0,
            },
            next: {
              translate: [0, '108%', -40],
              rotate: [-7, 0, 2],
              scale: 1.06,
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
          if (active) animateSlideText(active, 'in', 0.12)
        })
      },
      slideChange: ({ activeIndex }) => updateActiveNav(slides, activeIndex),
      slideChangeTransitionStart: (swiperInstance) => {
        if (reduced) return
        const prev = swiperInstance.slides[swiperInstance.previousIndex]
        const next = swiperInstance.slides[swiperInstance.activeIndex]
        if (prev instanceof HTMLElement) animateSlideText(prev, 'out')
        if (next instanceof HTMLElement) animateSlideText(next, 'in', 0.16)
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
