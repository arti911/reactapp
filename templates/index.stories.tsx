/* eslint-disable */
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TemplateName from '.';

export default {
  title: "TemplateName",
  component: TemplateName
} as ComponentMeta<typeof TemplateName>;

const Template : ComponentStory<typeof TemplateName> = () => <TemplateName />;

export const Default = Template.bind({});

Default.args = {};
