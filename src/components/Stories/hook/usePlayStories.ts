import { useState, useEffect, useRef, MouseEvent, TouchEvent } from "react";
import { useSwiper } from "swiper/react";

import { IStory, TYPE_ACTIONS } from "components/Stories/components/Story";

export const usePlayStories = (props: IStory) => {
  const [currentCount, setCurrentCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [paused, setPaused] = useState(false);
  const [interval, setInter] = useState(props.defaultInterval);
  const start = useRef<number>(Date.now());

  const swiper = useSwiper();

  const timerId = useRef<NodeJS.Timer>();
  const press = useRef<NodeJS.Timeout>();

  const load = () => setLoaded(true);

  const close = () => props.onCloseStories && props.onCloseStories();

  const previous = () => {
    setInter(props.defaultInterval);

    if (currentCount !== 0) {
      setCurrentCount((value) => value - 1);
      setLoaded(false);
    } else if (props.index !== 0) {
      swiper.slidePrev(500);
    }
  };

  const next = () => {
    setInter(props.defaultInterval);

    if (currentCount !== props.stories.length - 1) {
      setCurrentCount((value) => value + 1);
      setLoaded(false);
    } else if (props.index === props.countStories) {
      close();
      setCurrentCount(currentCount);
      clearInterval(timerId.current);
    } else {
      swiper.slideNext(500);
    }
  };

  const selectActions = (type: string) => {
    switch (type) {
      case TYPE_ACTIONS.CLOSE:
        close();
        break;
      case TYPE_ACTIONS.PREV:
        previous();
        break;
      case TYPE_ACTIONS.NEXT:
        next();
        break;
    }
  };

  const debouncePaused = (event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (!props.isMoveSlider && loaded) {
      press.current = setTimeout(() => {
        setInter((value: number) => value - (Date.now() - start.current));
        setPaused(!paused);
      }, 200);
    }
  };

  const mouseUp =(type: string) =>(event: MouseEvent<HTMLDivElement | HTMLButtonElement> | TouchEvent<HTMLDivElement | HTMLButtonElement>) => {
    event.preventDefault();
    press.current && clearTimeout(press.current);

    if (!loaded) {
      return;
    }

    if (paused) {
      setPaused(!paused);
    } else if (!props.isMoveSlider && !paused) {
      selectActions(type);
    }
  };

  useEffect(() => {
    if (props.isActive) {
      props.onBackground &&
        props.onBackground(props.stories[currentCount]?.link as string);

      if (props.triggerSwipe && props.onTrigger) {
        selectActions(props.triggerSwipe);
        props.onTrigger(undefined);
      }
    }
  }, [props.isActive, currentCount, props.triggerSwipe]);

  useEffect(() => {
    if (props.isActive) {
      if (loaded) {
        if (!paused) {
          start.current = Date.now();
          setInter(props.defaultInterval);

          timerId.current = setInterval(next, interval);
        }
      }
    }

    return () => clearInterval(timerId.current);
  }, [loaded, paused, props.isActive]);

  return {
    currentCount,
    paused,
    loaded,
    load,
    debouncePaused,
    mouseUp,
  };
};
