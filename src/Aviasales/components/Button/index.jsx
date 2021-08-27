import { Button } from "antd";

const ButtonMain = (props) => {
  return (
    <Button type={props.type} size={props.size} onClick={props.onClickHandler}>
      {props.label}
    </Button>
  );
};

export default ButtonMain;
