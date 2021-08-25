import { LIMIT } from "../../constants";
import ButtonMain from "./index";

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
};

const Template = (args) => <ButtonMain {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: "primary",
  size: "large",
  label: `Показать ещё ${LIMIT} билетов`,
};
