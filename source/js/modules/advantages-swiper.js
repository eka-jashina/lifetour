import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import { destroySwiper, debounce } from './swiper-utils.js';
import 'swiper/css';

const advContainer = document.querySelector('.advantages__swiper');
const advWrapper = document.querySelector('.advantages__list');
const advSlides = document.querySelectorAll('.advantage');
let advSwiper = null;

function initAdvantagesSwiper() {
  const breakpoint = 1440;

  if (window.innerWidth >= breakpoint && !advSwiper) {
    advContainer.classList.add('swiper');
    advWrapper.classList.add('swiper-wrapper');
    for (const slide of advSlides) {
      slide.classList.add('swiper-slide');
    }

    advSwiper = new Swiper('.advantages__swiper', {
      modules: [Navigation],
      loop: true,
      speed: 1000,
      autoHeight: true,
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 2,

      navigation: {
        nextEl: '.advantages__button--next',
        prevEl: '.advantages__button--prev',
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    });
  } else if (window.innerWidth < breakpoint && advSwiper) {
    destroySwiper({
      swiperInstance: advSwiper,
      swiperContainer: advContainer,
      wrapper: advWrapper,
      slides: advSlides
    });
    advSwiper = null;
  }
}

const debouncedResizeAdvantagesSwiper = debounce(initAdvantagesSwiper, 200);

export { initAdvantagesSwiper, debouncedResizeAdvantagesSwiper };
