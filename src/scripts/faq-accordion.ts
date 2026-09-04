const initFaqAccordion = (root: HTMLElement) => {
  const items = Array.from(root.querySelectorAll<HTMLElement>('.faq-accordion__item'))

  const setOpen = (item: HTMLElement, open: boolean) => {
    item.classList.toggle('is-open', open)
    item
      .querySelector<HTMLButtonElement>('.faq-accordion__trigger')
      ?.setAttribute('aria-expanded', String(open))
  }

  items.forEach((item) => {
    const trigger = item.querySelector<HTMLButtonElement>('.faq-accordion__trigger')
    if (!trigger) return

    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open')

      // Toggle open/close in the same frame so both panels transition together.
      items.forEach((other) => {
        setOpen(other, willOpen && other === item)
      })
    })
  })
}

document.querySelectorAll<HTMLElement>('[data-faq-accordion]').forEach(initFaqAccordion)
