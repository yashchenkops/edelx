const initFaqAccordion = (root: HTMLElement) => {
  const items = Array.from(root.querySelectorAll<HTMLElement>('.faq-accordion__item'))

  items.forEach((item) => {
    const trigger = item.querySelector<HTMLButtonElement>('.faq-accordion__trigger')
    if (!trigger) return

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open')

      items.forEach((other) => {
        if (other === item) return
        other.classList.remove('is-open')
        other
          .querySelector<HTMLButtonElement>('.faq-accordion__trigger')
          ?.setAttribute('aria-expanded', 'false')
      })

      item.classList.toggle('is-open', !isOpen)
      trigger.setAttribute('aria-expanded', String(!isOpen))
    })
  })
}

document.querySelectorAll<HTMLElement>('[data-faq-accordion]').forEach(initFaqAccordion)
