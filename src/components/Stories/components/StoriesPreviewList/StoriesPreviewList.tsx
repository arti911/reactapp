import React, { memo } from 'react';
import { Button } from "antd";

import { IStoriesPreview } from 'components/Stories/components/StoriesPreview';

interface IStoriesPreviewList {
  list: IStoriesPreview[];
  onOpenStories: (index: number, isWatch: boolean) => void;
}

export const StoriesPreviewList = memo((props: IStoriesPreviewList) => (
  <div className="stories-preview-list">
    {props.list.map((item, index: number) => (
        <Button
          key={item.id}
          type="primary"
          onClick={() => props.onOpenStories(index, true)}
          className="stories-preview"
        >
          {`${item.name}`}
        </Button>
      ))}
  </div>
));
