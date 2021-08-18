// aos
AOS.init()

// swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    650: {
      slidesPerView: 2
    }
  }
})

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

// Abre e fecha o menu quando clicar no icone: hamburguer e x
const nav = document.querySelector('nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 300) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
