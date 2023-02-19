import React from "react";

import { IContent } from "components/Stories/components/Story";

export interface IStoriesPreview {
    id: number;
    name: string;
    link: string;
    previewImage: {
      thumbnail: string;
      medium: string;
      fullSize: string;
      mediumLossy: string;
    }
    buttonColor?: string;
    buttonTitle?: string;
    contentItems: IContent[];
    openUrlViaBrowser: boolean;
    announcementFullScreen: boolean;
  }

  export const StoriesPreview = (props: IStoriesPreview) => {
    return (<h1>Preview Story</h1>);
}

