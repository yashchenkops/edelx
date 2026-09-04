const READY_EVENT = 'edelx:ready'
const READY_ATTR = 'data-app-ready'
const FALLBACK_MS = 10000

export const isAppReady = () =>
  document.documentElement.getAttribute(READY_ATTR) === 'true'

export const markAppReady = () => {
  if (isAppReady()) return

  document.documentElement.setAttribute(READY_ATTR, 'true')
  document.body.classList.remove('is-preloading')
  window.dispatchEvent(new CustomEvent(READY_EVENT))
}

export const whenAppReady = (): Promise<void> => {
  if (isAppReady()) return Promise.resolve()

  return new Promise((resolve) => {
    let settled = false

    const finish = () => {
      if (settled) return
      settled = true
      window.clearTimeout(timeoutId)
      window.removeEventListener(READY_EVENT, onReady)
      resolve()
    }

    const onReady = () => finish()

    window.addEventListener(READY_EVENT, onReady, { once: true })

    // If preloader was removed from the page, don't block forever.
    if (!document.querySelector('[data-preloader]')) {
      queueMicrotask(finish)
      return
    }

    const timeoutId = window.setTimeout(finish, FALLBACK_MS)
  })
}

/** Run entrance animations only after the preloader has finished. */
export const runWhenAppReady = (callback: () => void) => {
  void whenAppReady().then(callback)
}
