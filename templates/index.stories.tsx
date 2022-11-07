/* eslint-disable */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TemplateName from '.';

export default {
  title: "TemplateName",
} as ComponentMeta<typeof TemplateName>;

export const Default: ComponentStory<typeof TemplateName> = () => <TemplateName />;

Default.story = {
  name: 'default',
};
