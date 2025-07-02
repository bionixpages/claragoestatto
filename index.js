function toggleMode() {
  const html = document.documentElement
  const isLight = html.classList.toggle('light') // só alterna UMA VEZ

  const img = document.querySelector('#avatar') // usando ID ou seletor correto
  if (isLight) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }

  // salvar no localStorage (opcional)
  localStorage.setItem('theme', isLight ? 'light' : 'dark')
}

// Aplicar o tema salvo ao carregar
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme')
  const html = document.documentElement
  const img = document.querySelector('#avatar')

  if (savedTheme === 'light') {
    html.classList.add('light')
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    html.classList.remove('light')
    img.setAttribute('src', './assets/avatar.png')
  }
})
