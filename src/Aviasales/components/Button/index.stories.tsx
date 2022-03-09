import React from "react";
import { Story, Meta } from "@storybook/react";

import ButtonMain from "./index";

import { IButton } from "./index.interface";

import { LIMIT } from "../../constants";

export default {
  title: "Button",
  component: ButtonMain,
  argTypes: {
    size: {
      options: ["small", "middle", "large"],
      control: {
        type: "select",
      },
    },
    onClickHandler: {
      action: "clicked"
    }
  },
} as Meta;

const Template: Story<IButton> = (args) => <ButtonMain {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: "primary",
  size: "large",
  label: `Показать ещё ${LIMIT} билетов`,
};
