import React, { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";

import Stories from "../Stories";

const StoriesList = (props: any) => {
  const [ classStyle, setClassStyle ] = useState(true);

  const onActiveStory = (swiper: any) => {
    props.setActiveStory(swiper.activeIndex, true);
  }

  return (
    <div className={`stories-container-cube ${classStyle ? "stories-slider-perspective" : ""}`}>
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
        onActiveIndexChange={onActiveStory}
      >
        {props.list.map((item: any, index: number) => (
          <SwiperSlide key={item.key}>
            <Stories
              index={index}
              countStories={props.list.length - 1}
              stories={item.list}
              defaultInterval={2000}
              isActive={index === props.initialSlide}
              onStoryEnd={props.setActiveStory}
            />
          </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default memo(StoriesList);
