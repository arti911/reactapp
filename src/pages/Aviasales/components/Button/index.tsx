import { Button } from "antd";

import { IButton } from "./index.interface";

const ButtonMain = (props: IButton) => {
  return (
    <Button type={props.type} size={props.size} onClick={props.onClickHandler}>
      {props.label}
    </Button>
  );
};

export default ButtonMain;
