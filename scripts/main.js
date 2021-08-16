// aos
AOS.init()

//exit intent
const exit = e => {
  const shouldExit =
    [...e.target.classList].includes('exit-intent-popup') || // user clicks on mask
    e.target.className === 'close' || // user clicks on the close icon
    e.keyCode === 27 // user hits escape

  if (shouldExit) {
    document.querySelector('.exit-intent-popup').classList.remove('visible')
  }
}

const mouseEvent = e => {
  const shouldShowExitIntent =
    !e.toElement && !e.relatedTarget && e.clientY < 10

  if (shouldShowExitIntent) {
    document.removeEventListener('mouseout', mouseEvent)
    document.querySelector('.exit-intent-popup').classList.add('visible')

    CookieService.setCookie('exitIntentShown', true, 30)
  }
}

if (!CookieService.getCookie('exitIntentShown')) {
  setTimeout(() => {
    document.addEventListener('mouseout', mouseEvent)
    document.addEventListener('keydown', exit)
    document.querySelector('.exit-intent-popup').addEventListener('click', exit)
  }, 0)
}

/* mudar o header da página quando der scroll */
// const header = document.querySelector('#header')
// const navHeight = header.offsetHeight

// function changeHeaderWhenScroll() {
//   if (window.scrollY >= navHeight) {
//     // scroll é maior que a altura do header
//     header.classList.add('scroll')
//   } else {
//     // menor que a altura do header
//     header.classList.remove('scroll')
//   }
// }

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 300) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  // changeHeaderWhenScroll()
  backToTop()
})
