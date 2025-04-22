const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__list');
const menuLinks = menu.querySelectorAll('.nav__link');
const body = document.querySelector('.body');

burger.addEventListener('click', () => {
  burger.classList.toggle('nav__burger--active');
  menu.classList.toggle('nav__list--shown');
  body.classList.toggle('body--no-scroll');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('nav__list--shown');
    burger.classList.remove('nav__burger--active');
    body.classList.remove('body--no-scroll');
  });
});

import Swiper from 'swiper';
import {Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';

const heroSwiper = new Swiper('.hero__swiper', {
  modules: [Pagination],
  slidesPerView: 1,
  loop: true,
  speed: 900,
  autoHeight: true,
  pagination: {
    el: '.hero__navigation',
    type: 'bullets',
    bulletElement: 'button',
    bulletClass: 'hero__bullet',
    bulletActiveClass: 'hero__bullet--active',
    clickable: true,
  },
  on: {
    slideChange: function () {
      this.slides.forEach((slide, index) => {
        const isActive = index === this.activeIndex;
        slide.querySelectorAll('a, button, input, textarea, select, [tabindex]')
          .forEach(el => {
            el.tabIndex = isActive ? 0 : -1;
          });
      });
    },
  },
});

/* const toursSwiper = new Swiper('.tours__swiper', {
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

const instructorsSwiper = new Swiper('.instructors__swiper', {
  modules: [Navigation],
  speed: 1000,
  mousewheel: false,
  simulateTouch: false,
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
}); */

const advSwiper = document.querySelector('.advantages__container');
const wrapper = advSwiper.querySelector('.advantages__list');
const slides = advSwiper.querySelectorAll('.advantage');
let swiperInstance = null;

function destroySwiper() {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;

    // Удаляем классы swiper
    advSwiper.classList.remove('swiper');
    advSwiper.classList.remove('swiper-initialized');

    // Удаляем класс swiper-wrapper
    if (wrapper) {
      wrapper.classList.remove('swiper-wrapper');
    }

    // Удаляем классы swiper-slide у дочерних элементов
    slides.forEach(slide => {
      slide.classList.remove('swiper-slide');
    });
  }
}

function toggleSwiper() {
  const breakpoint = 1440;

  if (window.innerWidth >= breakpoint && !swiperInstance) {
    // Добавляем классы для Swiper
    advSwiper.classList.add('swiper');
    wrapper.classList.add('swiper-wrapper');
    for (let slide of slides) {
      slide.classList.add('swiper-slide');
    }

    swiperInstance = new Swiper('.advantages__container', {
      slidesPerView: 3,
      spaceBetween: 20,
    });
  } else if (window.innerWidth < breakpoint && swiperInstance) {
    destroySwiper();
  }
}

toggleSwiper();
