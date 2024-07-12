export function mudaParaLightMode(): void {
  const root = document.querySelector('html')
  if (root) {
    root.classList.remove('darkMode')
  }
}

export function mudaParaDarkMode(): void {
  const root = document.querySelector('html')
  if (root) {
    root.classList.add('darkMode')
  }
}
