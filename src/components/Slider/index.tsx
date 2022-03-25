import React, { cloneElement, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import 'swiper/css/bundle';

import "./style.scss";

import { ISlider } from "./index.interface";

const Slider = (props: ISlider) => {

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
    <div className="swiper-slider">
      <Swiper
        {...props.settings}
        modules={[Navigation, Pagination]}
        onUnlock={unlock}
        onLock={lock}
        onUpdate={update}
      >
        { props.children.map((item: ReactElement, index: number) => (
          <SwiperSlide key={index + 1}>
            {cloneElement(item, { ...item.props })}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
