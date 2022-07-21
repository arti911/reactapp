import React, { useRef } from "react";

import { IStories } from "../../hooks/IStories";

import useStories from "../../hooks/useStories";

import "./style.scss";

export const TYPE_STORIES = {
  IMAGE: "Image",
  VIDEO: "Video",
  BLOCK: "Block",
};

const Stories = (props: IStories) => {
  const {
    currentCount,
    paused,
    loaded,
    start,
    onClose,
    onLoad,
    previous,
    next,
    setInter,
    setPaused
  } = useStories(props);

  const press = useRef<any>();

  const getStoryContent = () => {
    const InnerContent = props.stories[currentCount].link;

    return <InnerContent />;
  };

  const debouncePaused = (event: any) => {
    event.preventDefault();

    press.current = setTimeout(() => {
      setInter((value: any) => value - (Date.now() - start));
      setPaused(!paused);
    }, 200);
  };
  
  const mouseUp = (type: string) => (event: any) => {
    event.preventDefault();
    press.current && clearTimeout(press.current);

    if (paused) {
      setPaused(!paused)
    } else {
      type === "next" ? next() : previous();
    }
  };

  return (
    <div className="stories">
      <div className="stories-close" onClick={onClose}></div>
      <div className="stories-progress" style={{ opacity: paused ? 0 : 1 }}>
        {props.stories.map((_: any, index: number) => (
          <div
            key={_.id}
            className={`stories-progress__item ${
              index < currentCount ? "stories-progress__item--done" : ""
            } ${
              index === currentCount && !loaded && props.isActive
                ? "stories-progress__item--active"
                : ""
            }`}
            style={{ width: `${100 / props.stories.length}%` }}
          >
            <div
              className="stories-progress__item-progress"
              style={{
                animationDuration: `${props.defaultInterval}ms`,
                animationPlayState: paused ? "paused" : "running",
              }}
            ></div>
          </div>
        ))}
      </div>

      <div className="stories-content">
        {loaded && (
          <div className="stories-content__loaded">
            <div className="stories-content__loaded-spiner"></div>
          </div>
        )}

        {currentCount <= props.stories.length - 1 && (
          (props.stories[currentCount].type === TYPE_STORIES.IMAGE && <img src={props.stories[currentCount].link} onLoad={onLoad} alt="car" />)
          || 
          (props.stories[currentCount].type === TYPE_STORIES.BLOCK && getStoryContent())
          )
        }
      </div>

      {!loaded && (
        <div className="stories-navigation">
          <div
            className="stories-navigation__prev"
            onMouseDown={debouncePaused}
            onMouseUp={mouseUp("prev")}
            onTouchStart={debouncePaused}
            onTouchEnd={mouseUp("prev")}
          ></div>
          <div
            className="stories-navigation__next"
            onMouseDown={debouncePaused}
            onMouseUp={mouseUp("next")}
            onTouchStart={debouncePaused}
            onTouchEnd={mouseUp("next")}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Stories;
