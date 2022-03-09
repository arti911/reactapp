import { HashRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";

import MainPage from "./components/Main";
import Aviasales from "./Aviasales";
import Calculator from "./Calculator";

const { Content } = Layout;

const App = () => (
  <Router>
    <Content>
      <Route path="/" component={MainPage} exact />
      <Route path="/aviasales" component={Aviasales} exact />
      <Route path="/calculator" component={Calculator} exact />
    </Content>
  </Router>
);

export default App;
