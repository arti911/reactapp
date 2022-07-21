import { SliderSingleProps } from "antd";

export interface IRange extends SliderSingleProps {
  changeDurationHandler: (value: number) => void;
}
