import React, { cloneElement, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, } from "swiper";

import 'swiper/css/bundle';

import "./style.scss";

SwiperCore.use([Navigation, Pagination]);

const Slider = (props: any) => {
  const [navigation, setNavigation] = useState<any>(false);
  const [pagination, setPagination] = useState<any>(false);

  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);

  const lock = (swiper: SwiperCore) => {
    swiper.disable();

    setPagination(false);
    setNavigation(false);
  }

  const unlock = (swiper: SwiperCore) => {
    swiper.enable();
    swiper.update();

    setPagination({
      dynamicBullets: true,
      clickable: true,
    });

    setNavigation({
      nextEl: nextRef.current,
      prevEl: prevRef.current,
    });
  }

  const update = (swiper: SwiperCore) => {
    swiper.slideToLoop(0, 0);
  }

  return (
    <div className="swiper-slider">
      { props.settings.loop && (
        <>
          <button className="swiper-slider-button-prev" ref={prevRef}>
            Prev
          </button>
          <button className="swiper-slider-button-next" ref={nextRef}>
            Next
          </button>
        </>
      )}
      <Swiper
        {...props.settings}
        navigation={navigation}
        pagination={pagination}
        onUnlock={unlock}
        onLock={lock}
        onUpdate={update}
      >
        { props.children.map((item: any, index: any) => (
          <SwiperSlide key={index + 1}>
            {cloneElement(item, { ...item.props })}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
