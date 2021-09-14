// swiper
export default function initSwiper() {
    var swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      mousewheel: false,
      keyboard: true,
      breakpoints: {
        780: {
          slidesPerView: 2
        }
      }
    })
    }