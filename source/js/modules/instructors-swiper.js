import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

function initInstructorsSwiper() {
  const instructorsSwiper = new Swiper('.instructors__swiper', {
    modules: [Navigation],
    speed: 1000,
    autoHeight: true,
    slidesPerView: 1,
    initialSlide: window.innerWidth < 768 ? 2 : 0,

    navigation: {
      nextEl: '.instructors__button--next',
      prevEl: '.instructors__button--prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  return instructorsSwiper;
}

export { initInstructorsSwiper };
