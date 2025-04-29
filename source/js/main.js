import './modules/burger.js';
import { initHeroSwiper } from './modules/hero-swiper.js';
import { initToursSwiper } from './modules/tours-swiper.js';
import { initInstructorsSwiper } from './modules/instructors-swiper.js';
import { initReviewsSwiper } from './modules/reviews-swiper.js';
import { initAdvantagesSwiper, debouncedResizeAdvantagesSwiper } from'./modules/advantages-swiper.js';
import { initGallerySwiper, debouncedResizeGallerySwiper } from './modules/gallery-swiper.js';
import './modules/form-validation.js';

initHeroSwiper();

initToursSwiper();

initInstructorsSwiper();

initReviewsSwiper();

initAdvantagesSwiper();
window.addEventListener('resize', debouncedResizeAdvantagesSwiper);

initGallerySwiper();
window.addEventListener('resize', debouncedResizeGallerySwiper);



