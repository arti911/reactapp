import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const HeaderMain = () => (
  <header className="aviasales-header">
    <Title italic={true} mark={true}>
      Aviasales
    </Title>
  </header>
);

export default HeaderMain;
