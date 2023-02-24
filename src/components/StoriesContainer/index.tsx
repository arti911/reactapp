import React, { memo, useCallback, useMemo, useState } from "react";
import { Button } from "antd";
import { woman, cars } from "../../data/constants";
import StoriesList from "../StoriesList";
import { IListItem } from "../StoriesList/index.interface";

const storiesContent = [
  {
    id: 8380,
    type: "Block",
    link: () => (
      <div style={{ background: "pink", padding: 20 }}>
        <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
        <h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
      </div>
    ),
  },
];

const storiesWomen = woman;

const storiesCars = cars;

const storiesSlider = [
  {
    key: 0,
    preview: "Посмотреть историю",
    list: storiesContent,
  },
  {
    key: 1,
    preview: "Посмотреть историю",
    list: storiesWomen,
  },
  {
    key: 2,
    preview: "Посмотреть историю",
    list: storiesCars,
  },
];

const StoriesContainer = () => {
  const [watchStories, setWatchStories] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const initSlide = useMemo(() => initialSlide, [ initialSlide ]);


  const showStories = useCallback((index: number, isWatch: boolean = false) => {
    setWatchStories(isWatch);
    setInitialSlide(index);
  }, []);

  return (
    <>
      {storiesSlider.map((item: IListItem, index: number) => (
        <Button
          key={item.key}
          type="primary"
          onClick={() => showStories(index, true)}
          className="stories-preview"
        >
          {`${item.preview} ${item.key}`}
        </Button>
      ))}
      {watchStories && (
        <StoriesList
          list={storiesSlider}
          initialSlide={initSlide}
          setActiveStory={showStories}
        />
      )}
    </>
  );
};

export default memo(StoriesContainer);
