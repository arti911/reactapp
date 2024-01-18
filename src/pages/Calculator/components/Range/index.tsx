import { Slider } from "antd";

import { IRange } from "./index.interface";

const Range = (props: IRange) => {
  return (
    <Slider
      min={props.min}
      max={props.max}
      value={props.value}
      onChange={props.changeDurationHandler}
    />
  );
};

export default Range;
