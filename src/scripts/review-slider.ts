import Swiper from 'swiper'
import type { Swiper as SwiperInstance } from 'swiper'
import { gsap } from 'gsap'
import 'swiper/css'

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
  const frontDeco = scope.querySelector<HTMLElement>('.review__slider-decoration--front')
  const backDeco = scope.querySelector<HTMLElement>('.review__slider-decoration--back')

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

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let busy = false

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

  const syncNav = (instance: SwiperInstance) => {
    prev?.classList.toggle('is-disabled', instance.isBeginning)
    next?.classList.toggle('is-disabled', instance.isEnd)
    prev?.toggleAttribute('disabled', instance.isBeginning)
    next?.toggleAttribute('disabled', instance.isEnd)
  }

  const getCard = (slide: Element | undefined) =>
    (slide as HTMLElement | undefined)?.querySelector<HTMLElement>('.review-card') ?? null

  const resetLayer = (node: HTMLElement | null) => {
    if (!node) return
    gsap.set(node, { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 })
  }

  const swiper = new Swiper(el, {
    speed: 0,
    loop: false,
    nested: true,
    allowTouchMove: false,
    watchOverflow: true,
    on: {
      init: (instance) => {
        syncSlide(instance.activeIndex)
        syncNav(instance)
      },
    },
  })

  const animateFolder = async (direction: 1 | -1) => {
    if (busy) return
    if (direction > 0 && swiper.isEnd) return
    if (direction < 0 && swiper.isBeginning) return

    const outCard = getCard(swiper.slides[swiper.activeIndex])

    if (reduced) {
      direction > 0 ? swiper.slideNext(0) : swiper.slidePrev(0)
      resetLayer(outCard)
      resetLayer(getCard(swiper.slides[swiper.activeIndex]))
      resetLayer(frontDeco)
      if (backDeco) gsap.set(backDeco, { x: 0, y: 0 })
      if (caption) gsap.set(caption, { opacity: 1, y: 0 })
      syncSlide(swiper.activeIndex)
      syncNav(swiper)
      return
    }

    busy = true
    const folderOut = [frontDeco, outCard].filter(Boolean) as HTMLElement[]

    try {
      // 1) Pull current folder out
      const outTl = gsap.timeline({ defaults: { overwrite: 'auto' } })

      outTl.to(folderOut, {
        y: -118,
        x: 42 * direction,
        rotate: 9 * direction,
        scale: 1.03,
        opacity: 0,
        duration: 0.42,
        ease: 'power2.in',
      })

      if (backDeco) {
        outTl.to(
          backDeco,
          {
            y: -10,
            x: 6 * direction,
            duration: 0.35,
            ease: 'power2.out',
          },
          0.05,
        )
      }

      if (caption) {
        outTl.to(
          caption,
          {
            opacity: 0,
            y: 8,
            duration: 0.2,
            ease: 'power1.in',
          },
          0,
        )
      }

      await outTl

      // 2) Swap while hidden
      resetLayer(outCard)
      direction > 0 ? swiper.slideNext(0) : swiper.slidePrev(0)
      syncSlide(swiper.activeIndex)
      syncNav(swiper)

      const inCard = getCard(swiper.slides[swiper.activeIndex])
      const folderIn = [frontDeco, inCard].filter(Boolean) as HTMLElement[]

      gsap.set(folderIn, {
        y: 56,
        x: -28 * direction,
        rotate: -6 * direction,
        scale: 0.96,
        opacity: 0,
      })

      // 3) Lay the next folder into the pocket
      const inTl = gsap.timeline({ defaults: { overwrite: 'auto' } })

      inTl.to(folderIn, {
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 0.58,
        ease: 'power3.out',
        stagger: 0.04,
      })

      if (backDeco) {
        inTl.to(
          backDeco,
          {
            y: 0,
            x: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          0,
        )
      }

      if (caption) {
        inTl.fromTo(
          caption,
          { opacity: 0, y: -6 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
          0.12,
        )
      }

      await inTl

      // Leave decorations free of inline transform so backdrop-filter stays alive
      if (frontDeco) gsap.set(frontDeco, { clearProps: 'transform,opacity' })
      if (backDeco) gsap.set(backDeco, { clearProps: 'transform' })
      if (inCard) gsap.set(inCard, { clearProps: 'transform' })
    } finally {
      busy = false
      syncNav(swiper)
    }
  }

  prev?.addEventListener('click', (event) => {
    event.preventDefault()
    void animateFolder(-1)
  })

  next?.addEventListener('click', (event) => {
    event.preventDefault()
    void animateFolder(1)
  })
}

document.querySelectorAll<HTMLElement>('[data-review-slider]').forEach(initReviewSlider)
