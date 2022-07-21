import React, { Fragment, useState } from "react";
import { Button } from "antd";
import { woman, cars } from "../../data/constants";
import StoriesList from "../StoriesList";

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

  const showStories = (index: number, isWatch: boolean = false) => {
    setWatchStories(isWatch);
    setInitialSlide(index);
  };

  return (
    <>
      {storiesSlider.map((item: any, index: number) => (
        <Fragment key={item.key}>
          <Button
            type="primary"
            onClick={() => showStories(index, true)}
            className="stories-preview"
          >
            {`${item.preview} ${item.key}`}
          </Button>
        </Fragment>
      ))}
      {watchStories && (
        <StoriesList
          list={storiesSlider}
          initialSlide={initialSlide}
          setActiveStory={showStories}
        />
      )}
    </>
  );
};

export default StoriesContainer;
