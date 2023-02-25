import React, { memo } from "react";

import "swiper/css";
import "swiper/css/effect-cube";

import { Story } from "components/Stories/components/Story";
import { Slider } from "components/Slider";

import { IStoriesPreview } from "components/Stories/components/StoriesPreview";
import { TTrigger } from "components/Stories/hook/useStories";

import "./style.scss";
import { useSliderStories } from "components/Stories/hook/useSliderStories";

export interface IStoriesSlider {
  list: IStoriesPreview[];
  initialSlide: number;
  triggerSwipe?: TTrigger;
  onCloseStories: () => void;
  onBackground?: (value: string) => void;
  onTrigger?: (value: TTrigger) => void;
}

export const StoriesSlider = memo((props: IStoriesSlider) => {
  const {
    currentIndexActiveStory,
    isMoveSlider,
    rootClass,
    settings,
    onStartMove,
    onEndMove,
    onSetActiveIndex,
  } = useSliderStories(props.initialSlide);

  return (
    <div className={rootClass}>
      <Slider
        settings={{
          ...settings,
          initialSlide: props.initialSlide,
          on: {
            transitionStart: onStartMove,
            sliderFirstMove: onStartMove,
            transitionEnd: onEndMove,
            activeIndexChange: (swiper) => onSetActiveIndex(swiper.activeIndex),
            setTranslate: (_, translate) => {
              const positionLastSlide = window.innerWidth * (props.list.length - 1);

              (translate === 0 || Math.abs(translate) === positionLastSlide) && onEndMove();
            },
          },
        }}
        items={props.list}
        renderItem={(item: IStoriesPreview, index: number) => (
          <Story
            index={index}
            countStories={props.list.length - 1}
            stories={item.contentItems}
            defaultInterval={5000}
            isActive={index === currentIndexActiveStory && !isMoveSlider}
            isMoveSlider={isMoveSlider}
            triggerSwipe={props.triggerSwipe}
            onCloseStories={props.onCloseStories}
            onBackground={props.onBackground}
            onTrigger={props.onTrigger}
          />
        )}
      />
    </div>
  );
});
