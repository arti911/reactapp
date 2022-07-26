import { useState, useEffect, useRef } from "react";
import { useSwiper } from "swiper/react";

import { IStories } from "./IStories";
import { TYPE_STORIES } from "../components/Stories";

const useStories = (props: IStories) => {
  const [currentCount, setCurrentCount] = useState(0);
  const [loaded, setLoaded] = useState(true);
  const [paused, setPaused] = useState(false);
  const [interval, setInter] = useState(props.defaultInterval);
  const start = Date.now();

  const swiper = useSwiper();

  const timerId = useRef<any>();

  const onClose = () => props.onStoryEnd(0);

  const onLoad = () => setLoaded(false);

  const previous = () => {
    if (currentCount === 0) {
      swiper.slidePrev(500);
      return;
    }

    setCurrentCount((value) => value - 1);
    setLoaded(true);
    setInter(props.defaultInterval);
  };
  
  const next = () => {
    if (currentCount >= props.stories.length - 1) {
      if (props.index === props.countStories) {
        props.onStoryEnd(0);
      } else {
        swiper.slideNext(500);
      }
      return;
    }

    setCurrentCount((value) => value + 1);
    setLoaded(true);
    setInter(props.defaultInterval);
  };

  useEffect(() => {
    if (props.stories[currentCount] !== undefined && props.stories[currentCount].type === TYPE_STORIES.BLOCK) {
      setLoaded(false);
    }

    if (props.isActive) {
      if (!loaded) {
        if (!paused) {
          timerId.current = setInterval(
            () => {
              setCurrentCount((value) => value + 1);
              setLoaded(true);
              setInter(props.defaultInterval);
            },
            interval
          );
        }
      }
    } else {
      setCurrentCount(0);
      setLoaded(false);
      setInter(props.defaultInterval);
    }

    return () => clearInterval(timerId.current);
  }, [currentCount, loaded, paused, props.isActive]);

  useEffect(() => {
    if (currentCount > props.stories.length - 1 && props.isActive) {
      if (props.index === props.countStories) {
        props.onStoryEnd(0);
      } else {
        swiper.slideNext(500);
      }
    }
  }, [ currentCount, props.stories, props.isActive ]);
  return {
    currentCount,
    paused,
    loaded,
    start,
    onClose,
    onLoad,
    previous,
    next,
    setInter,
    setPaused,
  }
};

export default useStories;
