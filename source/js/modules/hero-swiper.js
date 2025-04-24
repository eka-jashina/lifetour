import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

function initHeroSwiper() {
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

  return heroSwiper;
}

export { initHeroSwiper };
