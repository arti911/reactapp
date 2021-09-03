import { Typography } from "antd";
import { Link } from "react-router-dom";

import "./style.scss";

const { Title } = Typography;

const Main = () => (
  <section className="main">
    <Title>Hello World!</Title>
    <Link to="/aviasales">Поикс дешёвых авиабилетов</Link>
  </section>
);

export default Main;
