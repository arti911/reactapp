import { Layout } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from "./components/Main";
import Aviasales from "./Aviasales";

export const mainPath = "/reactapp"

const App = () => (
  <Router>
    <Route path={`${mainPath}`} component={MainPage} exact />
    <Route path={`${mainPath}/aviasales`} component={Aviasales} exact />
  </Router>
);

export default App;
