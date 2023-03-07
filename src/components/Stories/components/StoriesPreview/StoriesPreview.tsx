import React from "react";

import { IContent } from "components/Stories/components/Story";

import { Image } from "components/Image";

import "./style.scss";

export interface IStoriesPreview {
  id: number;
  name: string;
  link: string;
  previewImage: {
    thumbnail: string;
    medium: string;
    fullSize: string;
    mediumLossy: string;
  };
  buttonColor?: string;
  buttonTitle?: string;
  contentItems: IContent[];
  openUrlViaBrowser: boolean;
  announcementFullScreen: boolean;
}

interface IPreview {
  previewImage: {
    thumbnail: string;
    medium: string;
    fullSize: string;
    mediumLossy?: string;
  }
  onOpen: () => void;
}

export const StoriesPreview = (props: IPreview) => {
  return (
    <span role="button" className="stories-preview" onClick={props.onOpen}>
      <Image {...props.previewImage} />
    </span>
  );
};
