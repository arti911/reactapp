import React from "react";
import { Story, Meta } from "@storybook/react";

import Filter from "./index";

import { STOPS } from "../../constants";

import IFilter from "./index.interface";

export default {
  title: "Filter",
  component: Filter,
  decorators: [
    (Story) => (
      <aside className="aviasales__filters">
        <Story />
      </aside>
    ),
  ],
} as Meta;

const Template: Story<IFilter> = (args) => <Filter {...args} />;

export const Transfer = Template.bind({});
Transfer.args = {
  title: "Количество пересадок",
  items: Object.values(STOPS),
  clickFilterHandler: () => console.log(1),
};
