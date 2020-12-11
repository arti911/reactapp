import React from "react";
import { Modal } from "antd";

import AddCardForm from "../AddCardForm";

const AddCardModal = (props) => {
  const onCloseModal = () => {
    props.onCloseModal(false);
  };

  return (
    <Modal
      title={"Добавить карту"}
      visible={props.visible}
      centered={true}
      footer={null}
      onCancel={onCloseModal}
    >
      <AddCardForm triggerReset={props.visible} />
    </Modal>
  );
};

export default AddCardModal;
