import { Typography } from "antd";
import { Link } from "react-router-dom";

import { mainPath } from "../../App";

const { Title } = Typography;

const Main = () => (
  <>
    <Title>Hello World!</Title>
    <Link to={`${mainPath}/aviasales`}>Поикс дешёвых авиабилетов</Link>
  </>
);

export default Main;
