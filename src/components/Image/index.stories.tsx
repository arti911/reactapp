import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Image as ImageComponent } from ".";

export default {
  title: "UI/Image",
  component: ImageComponent,
  args: {
    src: "//images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80",
  }
} as ComponentMeta<typeof ImageComponent>;

const Template: ComponentStory<typeof ImageComponent> = (args) => <ImageComponent {...args} />;

export const Image = Template.bind({});
