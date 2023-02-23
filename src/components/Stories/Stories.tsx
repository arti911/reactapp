import React, { memo } from "react";
import { createPortal } from "react-dom";

import { StoriesPreviewList } from "components/Stories/components/StoriesPreviewList";
import { IStoriesPreview } from "components/Stories/components/StoriesPreview";
import { StoriesOpen } from "components/Stories/components/StoriesOpen";

import { useStories } from "components/Stories/hook/useStories";

interface IStories {
  list: IStoriesPreview[];
}

export const Stories = memo((props: IStories) => {
  const {
    openStories,
    initialStoryMemo,
    style,
    triggerSwipe,
    onOpenStories,
    onCloseStories,
    onBackground,
    onTrigger,
  } = useStories();

  return (
    <>
      <StoriesPreviewList list={props.list} onOpenStories={onOpenStories} />

      {createPortal(
        <StoriesOpen
          open={openStories}
          list={props.list}
          initialSlide={initialStoryMemo}
          style={style}
          triggerSwipe={triggerSwipe}
          onTrigger={onTrigger}
          onBackground={onBackground}
          onCloseStories={onCloseStories}
        />,
        document.body
      )}
    </>
  );
});
