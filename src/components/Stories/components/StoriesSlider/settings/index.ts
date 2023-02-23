import { EffectCoverflow, EffectCube, SwiperOptions } from "swiper";

export const desktopSettings: SwiperOptions = {
  centeredSlides: true,
  slidesPerView: "auto",
  effect: "coverflow",
  allowTouchMove: false,
  slideToClickedSlide: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 230,
    depth: 90,
    modifier: 1,
    slideShadows: false,
  },
  modules: [EffectCoverflow],
};

export const mobileSettings: SwiperOptions = {
  touchStartPreventDefault: false,
  effect: "cube",
  cubeEffect: {
    shadow: false,
    shadowOffset: 0,
    slideShadows: false,
  },
  modules: [EffectCube],
};
