import { SwiperOptions } from "swiper";

export const findBreakpoint = (settings: SwiperOptions, setCountSlidesHandler: (value: number) => void) => {
  if (settings.breakpoints !== undefined) {
    Object.entries(settings.breakpoints).forEach(([key, value]: [string, any]) => {
      if (document.body.clientWidth > +key) {
        setCountSlidesHandler(value.slidesPerView);
      }
    });
  }
};
