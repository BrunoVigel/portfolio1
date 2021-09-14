/* mudar o header da página quando der scroll */
function changeHeaderWhenScroll() {
    const header = document.querySelector('header')
    const navHeight = header.offsetHeight
    if (window.scrollY >= navHeight) {
      // scroll é maior que a altura do header
      header.classList.add('scroll')
    } else {
      // menor que a altura do header
      header.classList.remove('scroll')
    }
  }
  
    
  
  function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')
    if (window.scrollY >= 300) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }
  
  export default function initScrollEvent() {
    window.addEventListener('scroll', function () {
      changeHeaderWhenScroll()
      backToTop()
    })
  }