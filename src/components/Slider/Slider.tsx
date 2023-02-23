import React, { ReactNode } from "react";
import { SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";

import 'swiper/css/bundle';

import "./style.scss";

interface ISlider<T> {
  settings?: SwiperOptions;
  items: T[];
  classPagination?: string;
  renderItem: (props: T, index: number) => ReactNode;
}

export const Slider = <T, >(props: ISlider<T>) => {

  return (
    <>
      <Swiper
        {...props.settings}
        onTransitionStart={props.settings?.on?.transitionStart}
        onSliderFirstMove={props.settings?.on?.sliderFirstMove}
        onTransitionEnd={props.settings?.on?.transitionEnd}
        onActiveIndexChange={props.settings?.on?.activeIndexChange}
        onSetTranslate={props.settings?.on?.setTranslate}
      >
        { props.items.map((item, index) => (
          <SwiperSlide key={index}>
            { props.renderItem(item, index) }
          </SwiperSlide>
        ))}
      </Swiper>
      { props.classPagination && <div className={`custom-pagination custom-${props.classPagination}-pagination`}></div>}
    </>
  );
};
