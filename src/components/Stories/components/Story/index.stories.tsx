import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Story as StoryComponent } from ".";
import { stories } from "components/Stories/data";

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
  stories: stories[0]?.contentItems,
  isActive: false,
  index: 0,
  countStories: 0,
  defaultInterval: 5000,
  isMoveSlider: false,
  onBackground: undefined,
  onCloseStories: undefined,
};
