import { FC } from "react";
import { Radio } from "antd";

import { IRaioGroup } from "./index.interface";

const Tariffs: FC<IRaioGroup> = (props) => {
  return (
    <Radio.Group
      options={props.list}
      optionType={props.optionType}
      buttonStyle={props.buttonStyle}
      value={props.defaultValue}
      onChange={props.changeTariffHandler}
    />
  );
};

export default Tariffs;
