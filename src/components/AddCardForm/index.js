import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select } from "antd";

import "./AddCardForm.scss";

const { Option } = Select;

const CurrencySelection = (props) => {
  const onChange = (value) => {
    props.onChangeCurrency(value);
  };

  return (
    <Select
      defaultValue={props.currency}
      className="select-before"
      onChange={onChange}
    >
      <Option value="RUB">RUB</Option>
      <Option value="USD">USD</Option>
      <Option value="EUR">EUR</Option>
    </Select>
  );
};

const AddCardForm = (props) => {
  const [form] = Form.useForm();
  const [currency, setCurrency] = useState("RUB");

  const onReset = () => {
    form.resetFields();
  };

  const onSubmit = (data) => {
    const card = {
      ...data,
      id: Date.now(),
      currency,
    };

    onReset();
    props.onAddCard(card);
    props.onCloseModal(false);
  };

  useEffect(() => {
    onReset();
  }, [props.triggerReset]);

  return (
    <Form
      className={"add-card-form"}
      form={form}
      name={"addCard"}
      onFinish={onSubmit}
      layout={"vertical"}
    >
      <Form.Item
        label={"Название карты"}
        name={"nameCard"}
        rules={[
          {
            required: true,
            message: "Название не должно быть пустым.",
          },
        ]}
      >
        <Input placeholder={""} />
      </Form.Item>
      <Form.Item
        label={"Баланс карты"}
        name={"balanceCard"}
        rules={[
          {
            required: true,
            message: "Баланс не должен быть пустым.",
          },
        ]}
      >
        <Input
          addonBefore={
            <CurrencySelection
              currency={currency}
              onChangeCurrency={setCurrency}
            />
          }
          placeholder={""}
        />
      </Form.Item>
      <Form.Item>
        <Button type={"primary"} htmlType={"submit"}>
          Добавить
        </Button>
        <Button htmlType={"reset"} onClick={onReset}>
          Очистить
        </Button>
      </Form.Item>
    </Form>
    // </form>
  );
};

export default AddCardForm;
