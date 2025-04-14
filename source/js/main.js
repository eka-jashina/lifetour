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
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
  },
});
