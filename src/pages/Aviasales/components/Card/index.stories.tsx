import { Story, Meta } from "@storybook/react";

import Card from "./index";
import ICard from "./index.interface";

export default {
  component: Card,
  title: "Card",
} as Meta;

const Template: Story<ICard> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  carrier: "EK",
  price: 56417,
  segments: [
    {
      date: "2021-08-31T13:07:00.000Z",
      destination: "HKT",
      duration: 1755,
      origin: "MOW",
      stops: [],
    },
    {
      date: "2021-09-20T16:31:00.000Z",
      destination: "MOW",
      duration: 924,
      origin: "HKT",
      stops: ["HKG", "KUL", "DXB"],
    },
  ],
};
