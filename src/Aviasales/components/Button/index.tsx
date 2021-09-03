import { FC } from "react";
import { Button } from "antd";

import { IButton } from "./index.interface";

const ButtonMain: FC<IButton> = (props) => {
  return (
    <Button type={props.type} size={props.size} onClick={props.onClickHandler}>
      {props.label}
    </Button>
  );
};

export default ButtonMain;
