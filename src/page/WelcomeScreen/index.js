import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Empty, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import AddCardModal from "../../components/AddCardModal";

import { addCard } from "../../store/actions";

const WelcomeScreen = (props) => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  return (
    <Row align={"middle"} justify={"center"} wrap={false}>
      <Col>
        <Button icon={<PlusOutlined />} size={"large"} onClick={onClick}>
          Добавить карту
        </Button>
        {props.cards.length ? (
          props.cards.map((item) => {
            return <p key={item.name}>{JSON.stringify(item)}</p>;
          })
        ) : (
          <Empty
            description={"Список карт пуст"}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        )}
      </Col>
      <AddCardModal
        visible={visible}
        onAddCard={props.addCard}
        onCloseModal={setVisible}
      />
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (newCard) => dispatch(addCard(newCard)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
