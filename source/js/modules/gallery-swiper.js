import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import { destroySwiper, debounce } from './swiper-utils.js';
import 'swiper/css';

const galleryContainer = document.querySelector('.gallery__swiper');
const galleryWrapper = document.querySelector('.gallery__list');
const gallerySlides = document.querySelectorAll('.gallery__item');
let gallerySwiper = null;

function initGallerySwiper() {
  const breakpoint = 1440;

  if (window.innerWidth < breakpoint && !gallerySwiper) {
    galleryContainer.classList.add('swiper');
    galleryWrapper.classList.add('swiper-wrapper');
    for (const slide of gallerySlides) {
      slide.classList.add('swiper-slide');
    }

    gallerySwiper = new Swiper('.gallery__swiper', {
      modules: [Navigation],
      loop: true,
      speed: 1000,
      autoHeight: true,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 5,

      navigation: {
        nextEl: '.gallery__button--next',
        prevEl: '.gallery__button--prev',
      },

      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 4.5,
        },
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    });
  } else if (window.innerWidth >= breakpoint && gallerySwiper) {
    destroySwiper({
      swiperInstance: gallerySwiper,
      swiperContainer: galleryContainer,
      wrapper: galleryWrapper,
      slides: gallerySlides
    });
    gallerySwiper = null;
  }
}

const debouncedResizeGallerySwiper = debounce(initGallerySwiper, 200);

export { initGallerySwiper, debouncedResizeGallerySwiper };
