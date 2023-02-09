import React from "react";
import { SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import 'swiper/css/bundle';

import "./style.scss";

interface ISlider<T> {
  settings: SwiperOptions;
  items: T[];
  classPagination?: string;
  renderItem: (props: any) => any;
}

export const Slider = <T, >(props: ISlider<T>) => {

  const lock = (swiper: any) => swiper.disable();

  const unlock = (swiper: any) => {
    swiper.enable();
    swiper.update();
  }
  
  const update = (swiper: any) => {
    swiper.slideToLoop(0, 0);
    swiper.navigation.update();
  }

  return (
    <>
      <Swiper
        {...props.settings}
        modules={[Navigation, Pagination]}
        onUnlock={unlock}
        onLock={lock}
        onUpdate={update}
      >
        { props.items.map((item, index) => (
          <SwiperSlide key={index + 1}>
            { props.renderItem(item) }
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`custom-pagination custom-${props.classPagination}-pagination`}></div>
    </>
  );
};
