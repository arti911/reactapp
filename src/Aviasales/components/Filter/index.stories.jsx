import Filter from "./index";

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
};

const Template = (args) => <Filter {...args} />;

export const Transfer = Template.bind({});
Transfer.args = {
  title: "Количество пересадок",
  items: Object.values(STOPS),
  clickFilterHandler: () => console.log(1),
};
