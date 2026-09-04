import { gsap } from 'gsap'

const DURATION = 0.55

const getPanelParts = (item: HTMLElement) => {
  const panel = item.querySelector<HTMLElement>('.faq-accordion__panel')
  const inner = item.querySelector<HTMLElement>('.faq-accordion__panel-inner')
  const answer = item.querySelector<HTMLElement>('.faq-accordion__answer')
  return { panel, inner, answer }
}

const openPanel = (item: HTMLElement, animate: boolean) => {
  const { panel, inner, answer } = getPanelParts(item)
  if (!panel || !inner) return

  item.classList.add('is-open')
  item
    .querySelector<HTMLButtonElement>('.faq-accordion__trigger')
    ?.setAttribute('aria-expanded', 'true')

  const target = inner.scrollHeight
  gsap.killTweensOf([panel, answer].filter(Boolean))

  if (!animate) {
    gsap.set(panel, { height: target, autoAlpha: 1 })
    if (answer) gsap.set(answer, { y: 0, opacity: 0.85, clearProps: 'visibility' })
    return
  }

  const tl = gsap.timeline({ overwrite: true })

  tl.fromTo(
    panel,
    {
      height: panel.offsetHeight,
      autoAlpha: Number(gsap.getProperty(panel, 'autoAlpha')) || 0,
    },
    {
      height: target,
      autoAlpha: 1,
      duration: DURATION,
      ease: 'power3.inOut',
    },
    0,
  )

  if (answer) {
    tl.fromTo(
      answer,
      { y: 10, opacity: 0 },
      {
        y: 0,
        opacity: 0.85,
        duration: DURATION,
        ease: 'power3.inOut',
      },
      0,
    )
  }
}

const closePanel = (item: HTMLElement, animate: boolean) => {
  const { panel, answer } = getPanelParts(item)
  if (!panel) return

  item.classList.remove('is-open')
  item
    .querySelector<HTMLButtonElement>('.faq-accordion__trigger')
    ?.setAttribute('aria-expanded', 'false')

  gsap.killTweensOf([panel, answer].filter(Boolean))

  if (!animate) {
    gsap.set(panel, { height: 0, autoAlpha: 0 })
    if (answer) gsap.set(answer, { y: 0, opacity: 0 })
    return
  }

  const tl = gsap.timeline({ overwrite: true })

  tl.to(
    panel,
    {
      height: 0,
      autoAlpha: 0,
      duration: DURATION,
      ease: 'power3.inOut',
    },
    0,
  )

  if (answer) {
    tl.to(
      answer,
      {
        y: -10,
        opacity: 0,
        duration: DURATION,
        ease: 'power3.inOut',
      },
      0,
    )
  }
}

const initFaqAccordion = (root: HTMLElement) => {
  const items = Array.from(root.querySelectorAll<HTMLElement>('.faq-accordion__item'))
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  items.forEach((item) => {
    const trigger = item.querySelector<HTMLButtonElement>('.faq-accordion__trigger')
    const { panel, answer } = getPanelParts(item)
    if (!trigger || !panel) return

    if (item.classList.contains('is-open')) {
      openPanel(item, false)
    } else {
      gsap.set(panel, { height: 0, autoAlpha: 0 })
      if (answer) gsap.set(answer, { y: 0, opacity: 0 })
    }

    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open')
      const animate = !reduced

      // Start close + open in the same frame with identical duration/ease.
      const toClose = items.filter((other) => other !== item && other.classList.contains('is-open'))

      if (willOpen) {
        toClose.forEach((other) => closePanel(other, animate))
        openPanel(item, animate)
      } else {
        closePanel(item, animate)
      }
    })
  })

  const syncOpenHeights = () => {
    items.forEach((item) => {
      if (!item.classList.contains('is-open')) return
      const { panel, inner, answer } = getPanelParts(item)
      if (!panel || !inner) return
      gsap.set(panel, { height: inner.scrollHeight, autoAlpha: 1 })
      if (answer) gsap.set(answer, { y: 0, opacity: 0.85 })
    })
  }

  window.addEventListener('resize', syncOpenHeights)
}

document.querySelectorAll<HTMLElement>('[data-faq-accordion]').forEach(initFaqAccordion)
