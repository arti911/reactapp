import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";

import "./style.scss";

const { Title } = Typography;

const Main = () => (
  <section className="main page-container">
    <Title>Hello World!</Title>
    <Link to="/aviasales">Поиск дешёвых авиабилетов</Link>
    <Link to="/calculator">Калькулятор</Link>
    <Link to="/english">Английский</Link>
    <Link to="/workshop">Мастерская</Link>
  </section>
);

export default Main;
