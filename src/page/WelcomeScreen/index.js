import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import AddCardModal from "../../components/AddCardModal";

const WelcomeScreen = (props) => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  console.log("---props", props);
  return (
    <>
      <Button icon={<PlusOutlined />} size={"large"} onClick={onClick}>
        Добавить карту
      </Button>
      <AddCardModal visible={visible} onCloseModal={setVisible} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(WelcomeScreen);
