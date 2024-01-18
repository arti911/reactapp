import { Story, Meta } from "@storybook/react";

import Information from "./index";

import { ISegments } from "./index.interface";

export default {
  title: "Information",
  component: Information,
} as Meta;

const Template: Story<ISegments> = (args) => (
  <>
    {args.segments.map((item) => (
      <Information {...item} key={item.duration} />
    ))}
  </>
);

export const Flight = Template.bind({});
Flight.args = {
  segments: [
    {
      date: "2021-09-02T02:51:00.000Z",
      destination: "HKT",
      duration: 600,
      origin: "MOW",
      stops: ["HKG"],
    },
  ],
};

export const TwoFlights = Template.bind({});

TwoFlights.args = {
  segments: [
    {
      origin: "MOW",
      destination: "HKT",
      date: "2021-09-02T02:51:00.000Z",
      stops: ["HKG"],
      duration: 600,
    },
    {
      origin: "HKT",
      destination: "MOW",
      date: "2021-09-22T10:53:00.000Z",
      stops: ["BKK", "IST", "DXB"],
      duration: 1706,
    },
  ],
};
