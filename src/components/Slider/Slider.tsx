import { ReactNode } from "react";
import { Swiper as SwiperProps, SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css/bundle";

import "./style.scss";

interface SliderProps<T> {
  settings?: SwiperOptions;
  items: T[];
  classPagination?: string;
  renderItem: (props: T) => ReactNode;
}

export const Slider = <T,>(props: SliderProps<T>) => {
  const { settings, items, renderItem, classPagination } = props;

  const lock = (swiper: SwiperProps) => swiper.disable();

  const unlock = (swiper: SwiperProps) => {
    swiper.enable();
    swiper.update();
  };

  const update = (swiper: SwiperProps) => {
    swiper.slideToLoop(0, 0);
    swiper.navigation.update();
  };

  return (
    <>
      <Swiper
        {...settings}
        modules={[Navigation, Pagination]}
        onUnlock={unlock}
        onLock={lock}
        onUpdate={update}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index + 1}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
      <div className={`custom-pagination custom-${classPagination}-pagination`}></div>
    </>
  );
};
