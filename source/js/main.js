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

import { initHeroSwiper } from './modules/hero-swiper.js';
import { initToursSwiper } from './modules/tours-swiper.js';
import { initInstructorsSwiper } from './modules/instructors-swiper.js';
import { initReviewsSwiper } from './modules/reviews-swiper.js';
import { initAdvantagesSwiper, debouncedResizeAdvantagesSwiper } from'./modules/advantages-swiper.js';
import { initGallerySwiper, debouncedResizeGallerySwiper } from './modules/gallery-swiper.js';

initHeroSwiper();

initToursSwiper();

initInstructorsSwiper();

initReviewsSwiper();

initAdvantagesSwiper();
window.addEventListener('resize', debouncedResizeAdvantagesSwiper);

initGallerySwiper();
window.addEventListener('resize', debouncedResizeGallerySwiper);
