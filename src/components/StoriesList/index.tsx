import React, { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";

import Stories from "../Stories";
import { IListItem, IStoriesList } from "./index.interface";

const StoriesList = (props: IStoriesList) => {
  const [classStyle, setClassStyle] = useState(true);
  const [currentIndexActiveSlide, setCurrentIndexActiveSlide] = useState(props.initialSlide);

  return (
    <div
      className={`stories-container-cube ${
        classStyle ? "stories-slider-perspective" : ""
      }`}
    >
      <Swiper
        effect={"cube"}
        cubeEffect={{
          shadow: false,
          shadowOffset: 0,
          slideShadows: false,
        }}
        onTransitionStart={() => setClassStyle(false)}
        onSliderFirstMove={() => setClassStyle(false)}
        onTransitionEnd={() => setClassStyle(true)}
        modules={[EffectCube]}
        initialSlide={props.initialSlide}
        touchStartPreventDefault={false}
        onActiveIndexChange={(swiper: any) =>
          setCurrentIndexActiveSlide(swiper.activeIndex)
        }
      >
        {props.list.map((item: IListItem, index: number) => (
          <SwiperSlide key={item.key}>
            <Stories
              index={index}
              countStories={props.list.length - 1}
              stories={item.list}
              defaultInterval={2000}
              isActive={index === currentIndexActiveSlide}
              onStoryEnd={props.setActiveStory}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(StoriesList);
