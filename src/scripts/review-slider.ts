import Swiper from 'swiper'
import { Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

type ReviewCta = {
  href: string
  cta: string
}

const initReviewSlider = (root: HTMLElement) => {
  const el = root.querySelector<HTMLElement>('.review-swiper')
  if (!el) return

  const scope = root.closest<HTMLElement>('.review__slider') ?? root
  const prev = scope.querySelector<HTMLElement>('[data-review-prev]')
  const next = scope.querySelector<HTMLElement>('[data-review-next]')
  const caption = scope.querySelector<HTMLElement>('[data-review-caption]')
  const cta = scope.querySelector<HTMLAnchorElement | HTMLButtonElement>('[data-review-cta]')
  const ctaLabel = scope.querySelector<HTMLElement>('[data-review-cta-label]')

  let descriptions: string[] = []
  let ctas: ReviewCta[] = []

  try {
    descriptions = JSON.parse(root.dataset.reviewDescriptions || '[]') as string[]
  } catch {
    descriptions = []
  }

  try {
    ctas = JSON.parse(root.dataset.reviewCtas || '[]') as ReviewCta[]
  } catch {
    ctas = []
  }

  const syncSlide = (index: number) => {
    if (caption && descriptions.length) {
      caption.textContent = descriptions[index] ?? descriptions[0] ?? ''
    }

    const activeCta = ctas[index] ?? ctas[0]
    if (activeCta && cta) {
      if (cta instanceof HTMLAnchorElement) {
        cta.href = activeCta.href
      }
      if (ctaLabel) {
        ctaLabel.textContent = activeCta.cta
      }
    }
  }

  new Swiper(el, {
    modules: [Navigation, EffectFade],
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 450,
    loop: false,
    nested: true,
    allowTouchMove: false,
    navigation: {
      prevEl: prev,
      nextEl: next,
      disabledClass: 'is-disabled',
    },
    on: {
      init: (swiper) => syncSlide(swiper.activeIndex),
      slideChange: (swiper) => syncSlide(swiper.activeIndex),
    },
  })
}

document.querySelectorAll<HTMLElement>('[data-review-slider]').forEach(initReviewSlider)
