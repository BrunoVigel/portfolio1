export default function initMenu() {
  // Abre e fecha o menu quando clicar no icone: hamburguer e x
  const nav = document.querySelector('nav')
  const toggle = document.querySelectorAll('nav .toggle')
  
  for (const element of toggle) {
    element.addEventListener('click', function () {
      nav.classList.toggle('show');
    })
  }
}
