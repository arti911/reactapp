import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Story as StoryComponent, TYPE_STORIES } from ".";

export default {
  title: "Stories/Components",
  component: StoryComponent,
  decorators: [(Story) => <div style={{ height: "480px", width: "320px", marginInline: "auto" }}><Story /></div>],
  argTypes: {
    onBackground: { action: "onBackground" },
    onCloseStories: { action: "onCloseStories" },
    onTrigger: { action: "onTrigger" },
  }
} as ComponentMeta<typeof StoryComponent>;

const Template: ComponentStory<typeof StoryComponent> = (args) => (
  <StoryComponent {...args} />
);

export const Story = Template.bind({});
Story.args = {
  stories: [
    {
      id: Date.now(),
      type: TYPE_STORIES.IMAGE,
      link: "//images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80",
    },
    {
      id: Date.now() + 1,
      type: TYPE_STORIES.IMAGE,
      link: "//images.unsplash.com/photo-1522932467653-e48f79727abf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2458&q=80",
    },
    {
      id: Date.now() + 2,
      type: TYPE_STORIES.IMAGE,
      link: "//images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1900&q=80",
    },
    {
      id: Date.now() + 3,
      type: TYPE_STORIES.IMAGE,
      link: "//images.unsplash.com/photo-1555353540-64580b51c258?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80",
    },
  ],
  isActive: false,
  index: 0,
  countStories: 0,
  defaultInterval: 5000,
  isMoveSlider: true,
  onBackground: undefined,
  onCloseStories: undefined,
};
