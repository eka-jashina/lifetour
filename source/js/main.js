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
import {Pagination} from 'swiper/modules';
import 'swiper/css';

const heroSwiper = new Swiper('.hero__swiper', {
  modules: [Pagination],
  slidesPerView: 1,
  loop: true,
  speed: 900,
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
