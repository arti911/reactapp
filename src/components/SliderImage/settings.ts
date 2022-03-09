import { SwiperOptions } from "swiper";

export const settings: SwiperOptions = {
  slidesPerView: 4,
  resizeObserver: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  watchOverflow: true,
  navigation: true,
  pagination: {
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    425: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
};
