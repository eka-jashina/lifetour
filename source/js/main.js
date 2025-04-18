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
    1366: {
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

  navigation: {
    nextEl: '.instructors__button--next',
    prevEl: '.instructors__button--prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

