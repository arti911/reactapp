import React from "react";
import { Radio } from "antd";

import { IRaioGroup } from "./index.interface";

const Tariffs = (props: IRaioGroup) => {
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
