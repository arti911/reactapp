import React, { useEffect } from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";

import "./AddCardForm.scss";

const AddCardForm = (props) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    props.onAddCard(data);
    props.onCloseModal(false);
  };

  useEffect(() => {
    reset();
  }, [props.triggerReset]);

  return (
    <form className={"add-card-form"} onSubmit={handleSubmit(onSubmit)}>
      <label className={"add-card-form__field"}>
        <input
          name={"nameCard"}
          type={"text"}
          ref={register}
          autoComplete={"off"}
          required
        />
        <span className={"add-card-form__placeholder"}>Название карты</span>
      </label>
      <label className={"add-card-form__field"}>
        <input
          name={"balanceCard"}
          type={"text"}
          ref={register}
          autoComplete={"off"}
          required
        />
        <span className={"add-card-form__placeholder"}>Баланс карты</span>
      </label>
      <label>
        <Button type={"primary"} htmlType={"submit"}>
          Добавить
        </Button>
        <Button htmlType={"reset"}>Очистить</Button>
      </label>
    </form>
  );
};

export default AddCardForm;
