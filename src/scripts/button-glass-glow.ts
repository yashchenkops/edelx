const initialized = new WeakSet<HTMLElement>()

const playGlow = (btn: HTMLElement, glow: HTMLElement, clientX: number, clientY: number) => {
  const rect = btn.getBoundingClientRect()
  const x = ((clientX - rect.left) / rect.width) * 100
  const y = ((clientY - rect.top) / rect.height) * 100

  btn.style.setProperty('--glow-x', `${x}%`)
  btn.style.setProperty('--glow-y', `${y}%`)

  glow.classList.remove('is-active', 'is-fading')
  void glow.offsetWidth
  glow.classList.add('is-active')
}

const resetGlow = (glow: HTMLElement) => {
  glow.classList.remove('is-active', 'is-fading')
}

const initGlassButtonGlow = (btn: HTMLElement) => {
  if (initialized.has(btn)) return

  const glow = btn.querySelector<HTMLElement>('.button__glow')
  if (!glow) return

  initialized.add(btn)

  const fadeGlow = () => {
    if (!glow.classList.contains('is-active')) return
    glow.classList.remove('is-active')
    glow.classList.add('is-fading')
  }

  glow.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'opacity' && glow.classList.contains('is-fading')) {
      resetGlow(glow)
    }
  })

  btn.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    playGlow(btn, glow, event.clientX, event.clientY)
  })

  btn.addEventListener('pointerup', fadeGlow)
  btn.addEventListener('pointercancel', fadeGlow)
}

document.querySelectorAll<HTMLElement>('.button--glass').forEach(initGlassButtonGlow)
