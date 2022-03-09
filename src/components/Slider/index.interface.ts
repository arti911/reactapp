import SwiperCore from "swiper";

export interface ISlider {
  settings: SwiperCore;
  loop: boolean;
  children: JSX.Element | JSX.Element[];
}
