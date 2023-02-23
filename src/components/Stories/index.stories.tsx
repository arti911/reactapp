import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Stories as StoriesComponent } from ".";
import { stories } from "components/Stories/data";

export default {
  title: "Stories/Components",
  component: StoriesComponent,
  args: {
    list: stories,
  }

} as ComponentMeta<typeof StoriesComponent>;

const Template: ComponentStory<typeof StoriesComponent> = (args) => <StoriesComponent {...args} />;

export const Stories = Template.bind({});
