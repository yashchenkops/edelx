import { runWhenAppReady } from '@/scripts/app-ready'

const FIT_MQ = '(max-width: 1024px)'

const contentBoxHeight = (el: HTMLElement) => {
  const style = getComputedStyle(el)
  return (
    el.clientHeight -
    parseFloat(style.paddingTop) -
    parseFloat(style.paddingBottom)
  )
}

const fitSection = (section: HTMLElement) => {
  const scene = section.querySelector<HTMLElement>('.page-section__scene')
  const inner = section.querySelector<HTMLElement>('.page-section__inner')
  if (!scene || !inner) return

  inner.style.transform = ''
  inner.style.width = ''
  inner.style.transformOrigin = ''

  if (!window.matchMedia(FIT_MQ).matches) return

  const available = contentBoxHeight(scene)
  if (available <= 0) return

  // Measure unscaled layout height (includes in-flow content only).
  const needed = inner.scrollHeight
  if (needed <= 0) return

  const scale = Math.min(1, available / needed)
  // Keep scaled block visually centered (matches flex align-items: center).
  inner.style.transformOrigin = 'center center'

  if (scale < 0.999) {
    // Scale uniformly — same visual effect as shrinking the viewport width.
    inner.style.transform = `scale(${scale})`
  }
}

export const fitAllSections = () => {
  document
    .querySelectorAll<HTMLElement>('.page-section')
    .forEach((section) => fitSection(section))
}

export const initSectionFit = () => {
  let raf = 0
  const run = () => {
    window.cancelAnimationFrame(raf)
    raf = window.requestAnimationFrame(() => fitAllSections())
  }

  runWhenAppReady(run)
  void document.fonts.ready.then(run)
  window.addEventListener('resize', run)
  window.addEventListener('orientationchange', run)

  const scenes = document.querySelectorAll<HTMLElement>('.page-section__scene')
  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(run)
    scenes.forEach((scene) => ro.observe(scene))
  }

  // Re-fit when a slide becomes active (animations / nested content).
  document.querySelectorAll<HTMLElement>('.page-section').forEach((section) => {
    new MutationObserver(() => {
      if (section.classList.contains('swiper-slide-active')) run()
    }).observe(section, { attributes: true, attributeFilter: ['class'] })
  })

  run()
}
