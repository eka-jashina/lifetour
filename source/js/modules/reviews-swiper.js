import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

function initReviewsSwiper() {
  const reviewsSwiper = new Swiper('.reviews__swiper', {
    modules: [Navigation],
    speed: 1000,
    mousewheel: false,
    simulateTouch: false,
    autoHeight: true,
    slidesPerView: 1,

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 1.3,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 1.72,
        slidesPerGroup: 1,
        spaceBetween: 120,
      },
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  return reviewsSwiper;
}

export { initReviewsSwiper };
