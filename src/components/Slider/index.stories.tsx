import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Slider as SliderComponent } from ".";
import { Image } from "../Image";

import { settings } from "../SliderImage/settings";

import "./style.scss";

export default {
  title: "FC/Slider",
  component: SliderComponent,
  args: {
    items: [
      "//images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1378&q=80",
      "//images.unsplash.com/photo-1555353540-64580b51c258?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80",
    ],
    renderItem: (item: string) => <Image src={item} />,
    settings,
  }
} as ComponentMeta<typeof SliderComponent>;

const Template: ComponentStory<typeof SliderComponent> = (args) => (
  <SliderComponent {...args} />
);

export const Slider = Template.bind({});
