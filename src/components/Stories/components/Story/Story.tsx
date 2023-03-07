import React, { memo, useEffect, useRef } from "react";
import classNames from "classnames";

import { usePlayStories } from "components/Stories/hook/usePlayStories";

import { TTrigger } from "components/Stories/hook/useStories";

import "./style.scss";

export enum TYPE_STORIES {
  IMAGE = "Image",
  VIDEO = "Video",
  BLOCK = "Block",
}

export const TYPE_ACTIONS = {
  CLOSE: "close",
  PREV: "prev",
  NEXT: "next",
};

export interface IContent {
  id: number;
  type: "Image" | "Video" | "Block";
  link: string; //| TLink
}

export interface IStory {
  isActive: boolean; // Активный слайд
  index: number; // Индекс слайда
  countStories: number; // Количество слайдов
  defaultInterval: number; // Время просмотра истории
  stories: IContent[]; // Массив контента в одной истории
  isMoveSlider: boolean; // Анимация перелистывания
  triggerSwipe?: TTrigger; // Флаг был ли клик по кнопкам в родителе
  onCloseStories?: () => void; // Закрыть слайдер
  onBackground?: (value: string) => void; // Сменить фон
  onTrigger?: (value: TTrigger) => void; // Установить флаг в undefined
}

export const Story = memo((props: IStory) => {
  const {
    currentCount,
    paused,
    loaded,
    load,
    debouncePaused,
    mouseUp,
  } = usePlayStories(props);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (paused) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }, [paused]);

  return (
    <div className="story">
      {props.onCloseStories && (
        <button className="story-close" onClick={mouseUp(TYPE_ACTIONS.CLOSE)} />
      )}
      <div className="story-progress" style={{ opacity: paused ? 0 : 1 }}>
        {props.stories.map((_, index: number) => (
          <div
            key={_.id}
            className={classNames("story-progress__item", {
              "story-progress__item--done": index < currentCount,
              "story-progress__item--active": index === currentCount && loaded && props.isActive,
            })}
            style={{ width: `${100 / props.stories.length}%` }}
          >
            <div
              className="story-progress__item-progress"
              style={{
                animationDuration: `${props.defaultInterval}ms`,
                animationPlayState: paused ? "paused" : "running",
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="story-content">
        {!loaded && (
          <div className="story-content__loaded">
            <div className="story-content__loaded-spiner"></div>
          </div>
        )}

        {currentCount <= props.stories.length - 1 &&
          props.stories[currentCount]?.type === TYPE_STORIES.IMAGE && (
            <img
              src={props.stories[currentCount]?.link}
              onLoad={load}
              alt="car"
              decoding="async"
            />
            // ||
            // (props.stories[currentCount]?.type === TYPE_STORIES.VIDEO &&
            //   // props.isActive &&
            //   <video
            //     ref={videoRef}
            //     muted
            //     playsInline
            //     autoPlay={props.isActive}
            //     onWaiting={() => {if (loaded) { setPaused(true)}}}
            //     onPlaying={() => setPaused(false)}
            //     onCanPlayThrough={load}
            //     preload="metadata"
            //   >
            //     <source src={props.stories[currentCount]?.link as string} type="video/mp4" />
            //   </video>
            // )
            // ||
            // (props.stories[currentCount]?.type === TYPE_STORIES.BLOCK)
          )}
      </div>

      <div className="story-navigation">
        <div
          className="story-navigation__prev"
          onMouseDown={debouncePaused}
          onMouseUp={mouseUp(TYPE_ACTIONS.PREV)}
          onTouchStart={debouncePaused}
          onTouchEnd={mouseUp(TYPE_ACTIONS.PREV)}
        />
        <div
          className="story-navigation__next"
          onMouseDown={debouncePaused}
          onMouseUp={mouseUp(TYPE_ACTIONS.NEXT)}
          onTouchStart={debouncePaused}
          onTouchEnd={mouseUp(TYPE_ACTIONS.NEXT)}
        />
      </div>
    </div>
  );
});
