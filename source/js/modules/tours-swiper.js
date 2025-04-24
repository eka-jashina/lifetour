import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

function initToursSwiper() {
  const toursSwiper = new Swiper('.tours__swiper', {
    modules: [Navigation],
    speed: 1000,
    mousewheel: false,
    simulateTouch: false,
    autoHeight: true,
    slidesPerView: 1,

    navigation: {
      nextEl: '.tours__button--next',
      prevEl: '.tours__button--prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  return toursSwiper;
}

export { initToursSwiper };