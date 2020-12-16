import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Empty, Row, Col, List } from "antd";
import { PlusOutlined, CreditCardOutlined } from "@ant-design/icons";

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
          <List
            dataSource={props.cards}
            bordered
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<CreditCardOutlined />}
                  title={item.nameCard}
                  description={item.balanceCard}
                />
              </List.Item>
            )}
          />
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
