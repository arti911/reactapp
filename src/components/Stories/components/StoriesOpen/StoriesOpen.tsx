import { TTrigger } from "components/Stories/hook/useStories";
import React, { CSSProperties } from "react";

import { StoriesSlider } from "components/Stories/components/StoriesSlider";

import { IStoriesPreview } from "components/Stories/components/StoriesPreview";

import "./style.scss";

interface IStoriesOpen {
  open: boolean;
  list: IStoriesPreview[];
  initialSlide: number;
  style: CSSProperties;
  triggerSwipe: TTrigger;
  onCloseStories: () => void;
  onBackground: (value: string) => void;
  onTrigger: (value: TTrigger) => () => void;
}

export const StoriesOpen = (props: IStoriesOpen) => {
  if (!props.open) return null;

  return (
    <div className="stories-open">
      <div className="stories-open__bg" style={props.style} />
      <div className="stories-open__wrapper">
        <header className="stories-open__header">
          <div className="stories-open__logo">Логотип</div>
          <button className="stories-open__button-close" onClick={props.onCloseStories}>X</button>
        </header>
        <StoriesSlider
          list={props.list}
          initialSlide={props.initialSlide}
          triggerSwipe={props.triggerSwipe}
          onCloseStories={props.onCloseStories}
          onBackground={props.onBackground}
          onTrigger={props.onTrigger(undefined)}
        />
        <span role="button" className="stories-open__button stories-open__button--prev" onClick={props.onTrigger("prev")}>Предыдущий</span>
        <span role="button" className="stories-open__button stories-open__button--next" onClick={props.onTrigger("next")}>Следующий</span>
      </div>
    </div>
  );
};
