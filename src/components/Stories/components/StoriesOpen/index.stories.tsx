/* eslint-disable */
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { StoriesOpen as StoriesOpenComponent } from '.';
import { stories } from "components/Stories/data";

export default {
  title: "Stories/Components",
  component: StoriesOpenComponent,
  argTypes: {
    onCloseStories: { action: 'onCloseStories' },
    onBackground: { action: 'onBackground' },
    onTrigger: { action: 'onTrigger' },
  },
  args: {
    open: false,
    list: [
      stories[0],
      stories[1],
      stories[2],
      stories[3],
      stories[4],
      stories[5],
      stories[6],
    ],
    initialSlide: 0,
  },
} as ComponentMeta<typeof StoriesOpenComponent>;

const Template : ComponentStory<typeof StoriesOpenComponent> = (args) => <StoriesOpenComponent {...args} />;

export const StoriesOpen = Template.bind({});
