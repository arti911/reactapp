import { SwiperOptions } from "swiper";

export interface ISlider {
  settings: SwiperOptions;
  children: JSX.Element | JSX.Element[] | any;
}
