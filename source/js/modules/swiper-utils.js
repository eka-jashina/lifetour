function destroySwiper({ swiperInstance, swiperContainer, wrapper, slides }) {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperContainer.classList.remove('swiper', 'swiper-initialized');
    if (wrapper) wrapper.classList.remove('swiper-wrapper');
    slides.forEach(slide => slide.classList.remove('swiper-slide'));
  }
}

function debounce(fn, delay = 200) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}


export { destroySwiper, debounce };
