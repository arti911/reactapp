import { Slider } from "antd";
import { FC } from "react";
import { IRange } from "./index.interface";

const Range: FC<IRange> = (props) => {
  return <Slider min={props.min} max={props.max} value={props.value} onChange={props.changeDurationHandler} />;
};

export default Range;
