import { SwiperOptions } from "swiper/types";

export const findBreakpoint = (
  settings: SwiperOptions,
  setCountSlidesHandler: (value: number) => void,
) => {
  if (settings.breakpoints !== undefined) {
    Object.entries(settings.breakpoints).forEach(([key, value]: [string, SwiperOptions]) => {
      const { slidesPerView } = value;
      if (document.body.clientWidth > +key && typeof slidesPerView === "number") {
        setCountSlidesHandler(slidesPerView);
      }
    });
  }
};
