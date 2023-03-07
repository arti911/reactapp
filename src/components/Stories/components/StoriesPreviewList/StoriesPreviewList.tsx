import React, { memo } from 'react';

import { IStoriesPreview, StoriesPreview } from 'components/Stories/components/StoriesPreview';
import { Slider } from 'components/Slider';
import { settings } from './settings';

import "./style.scss";

interface IStoriesPreviewList {
  list: IStoriesPreview[];
  onOpenStories: (index: number, isWatch: boolean) => void;
}

export const StoriesPreviewList = memo((props: IStoriesPreviewList) => (
  <div className="stories-preview-slider">
    <Slider
      settings={settings}
      items={props.list}
      renderItem={(item, index) => <StoriesPreview previewImage={item.previewImage} onOpen={() => props.onOpenStories(index, true)}  />}
    />
  </div>
));
