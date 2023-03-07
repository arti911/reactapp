import { useState } from "react";
import classNames from "classnames";
import Swiper from "swiper";

import { IStoriesSlider } from "components/Stories/components/StoriesSlider";

import {
  desktopSettings,
  mobileSettings,
} from "components/Stories/components/StoriesSlider/settings";

export const useSliderStories = (props: IStoriesSlider) => {
  const { initialSlide, list } = props;

  const [isMoveSlider, setMoveSlider] = useState(false);
  const [currentIndexActiveStory, setCurrentIndexActiveStory] =
    useState(initialSlide);

  const widthDesktop = window.innerWidth >= 960;

  const settings = widthDesktop ? desktopSettings : mobileSettings;

  const rootClass = classNames("stories-slider", {
    "stories-slider--desktop": widthDesktop,
    "stories-slider--mobile": !widthDesktop,
    "stories-slider-perspective": !isMoveSlider,
  });

  const onStartMove = () => setMoveSlider(true);

  const onEndMove = () => setMoveSlider(false);

  const onSetActiveIndex = (swiper: Swiper) => setCurrentIndexActiveStory(swiper.activeIndex);

  const onTranslate = (_: Swiper, translate: number) => {
    const positionLastSlide = window.innerWidth * (list.length - 1);

    if (translate === 0 || Math.abs(translate) === positionLastSlide) onEndMove();
  };

  return {
    currentIndexActiveStory,
    isMoveSlider,
    rootClass,
    settings,
    onStartMove,
    onEndMove,
    onSetActiveIndex,
    onTranslate
  };
};
