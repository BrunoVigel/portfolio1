export default function initHideMenu() {
    /* quando clicar em um item do menu, esconder o menu */
    const nav = document.querySelector('nav')
    const links = document.querySelectorAll('nav ul li a')
  
    for (const link of links) {
      link.addEventListener('click', function () {
        nav.classList.remove('show')
      })
    }
  }