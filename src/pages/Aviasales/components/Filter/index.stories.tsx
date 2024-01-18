import { Story, Meta } from "@storybook/react";

import { Filter, FilterProps } from "./index";

import { STOPS } from "../../constants";

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

const Template: Story<FilterProps> = (args) => <Filter {...args} />;

export const Transfer = Template.bind({});
Transfer.args = {
  title: "Количество пересадок",
  items: Object.values(STOPS),
  clickFilterHandler: () => console.log(1),
};
