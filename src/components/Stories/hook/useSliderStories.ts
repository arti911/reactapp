import { useState } from "react";
import classNames from "classnames";

import {
  desktopSettings,
  mobileSettings,
} from "components/Stories/components/StoriesSlider/settings";

export const useSliderStories = (initialStory: number) => {
  const [isMoveSlider, setMoveSlider] = useState(false);
  const [currentIndexActiveStory, setCurrentIndexActiveStory] =
    useState(initialStory);

  const widthDesktop = window.innerWidth >= 960;

  const settings = widthDesktop ? desktopSettings : mobileSettings;

  const rootClass = classNames("stories-slider", {
    "stories-slider--desktop": widthDesktop,
    "stories-slider--mobile": !widthDesktop,
    "stories-slider-perspective": isMoveSlider,
  });

  const onStartMove = () => setMoveSlider(true);

  const onEndMove = () => setMoveSlider(false);

  const onSetActiveIndex = (index: number) => setCurrentIndexActiveStory(index);

  return {
    currentIndexActiveStory,
    isMoveSlider,
    rootClass,
    settings,
    onStartMove,
    onEndMove,
    onSetActiveIndex,
  };
};
