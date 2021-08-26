import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/Main";

const App = () => (
  <Router>
    <Route path="/reactapp" component={Main} exact />
  </Router>
);

export default App;
