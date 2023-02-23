import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { StoriesSlider as StoriesSliderComponent } from ".";
import { stories } from "components/Stories/data";

export default {
  title: "Stories/Components",
  component: StoriesSliderComponent,
  args: {
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
    onBackground: undefined,
  },
  argTypes: {
    onCloseStories: { action: 'onCloseStories' },
    onBackground: { action: 'onBackground' },
    onTrigger: { action: 'onTrigger' }
  }
} as ComponentMeta<typeof StoriesSliderComponent>;

const Template: ComponentStory<typeof StoriesSliderComponent> = (args) => (
  <StoriesSliderComponent {...args} />
);

export const StoriesSlider = Template.bind({});
