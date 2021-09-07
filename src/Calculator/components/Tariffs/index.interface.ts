import { RadioChangeEvent, RadioGroupProps } from "antd";

export interface IRaioGroup extends RadioGroupProps {
  list: Array<string>;
  changeTariffHandler: (event: RadioChangeEvent) => void;
}
