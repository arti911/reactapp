/* eslint-disable */

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TemplateName as TemplateNameComponent } from '.';

export default {
  title: "TemplateName",
  component: TemplateNameComponent,
  args: {
    name: "TemplateName component",
  },
  argTypes: {},
} as ComponentMeta<typeof TemplateNameComponent>;

const Template: ComponentStory<typeof TemplateNameComponent> = (args) => <TemplateNameComponent {...args} />;

export const TemplateName = Template.bind({});
