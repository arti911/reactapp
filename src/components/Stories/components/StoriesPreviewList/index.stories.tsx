import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { StoriesPreviewList as StoriesPreviewListComponents } from ".";
import { stories } from "components/Stories/data";

export default {
  title: "Stories/Components",
  component: StoriesPreviewListComponents,
  args: {
    list: stories
  },
} as ComponentMeta<typeof StoriesPreviewListComponents>;

const Template: ComponentStory<typeof StoriesPreviewListComponents> = (
  args
) => <StoriesPreviewListComponents {...args} />;

export const StoriesPreviewList = Template.bind({});
