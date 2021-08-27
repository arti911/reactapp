import Card from "./index";

export default {
  component: Card,
  title: "Card",
};

const Template = (args) => <Card {...args.ticket} />;

export const Default = Template.bind({});
Default.args = {
  ticket: {
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
  },
};
