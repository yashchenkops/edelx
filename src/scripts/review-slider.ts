import Swiper from 'swiper'
import { Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const initReviewSlider = (root: HTMLElement) => {
  const el = root.querySelector<HTMLElement>('.review-swiper')
  if (!el) return

  const scope = root.closest<HTMLElement>('.review__slider') ?? root
  const prev = scope.querySelector<HTMLElement>('[data-review-prev]')
  const next = scope.querySelector<HTMLElement>('[data-review-next]')
  const caption = scope.querySelector<HTMLElement>('[data-review-caption]')

  let descriptions: string[] = []
  try {
    descriptions = JSON.parse(root.dataset.reviewDescriptions || '[]') as string[]
  } catch {
    descriptions = []
  }

  const syncCaption = (index: number) => {
    if (!caption || !descriptions.length) return
    caption.textContent = descriptions[index] ?? descriptions[0] ?? ''
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
      init: (swiper) => syncCaption(swiper.activeIndex),
      slideChange: (swiper) => syncCaption(swiper.activeIndex),
    },
  })
}

document.querySelectorAll<HTMLElement>('[data-review-slider]').forEach(initReviewSlider)
