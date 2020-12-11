import React from "react";
import { Link, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Layout, Menu } from "antd";

import WelcomeScreen from "./page/WelcomeScreen";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Router>
        <Header>
          <Menu theme={"dark"} mode={"horizontal"}>
            <Menu.Item key="app">
              <Link to="/home">Home</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Route path="/home" component={WelcomeScreen} />
          <Redirect from="/" to="/home" />
        </Content>
      </Router>
    </Layout>
  );
};

export default App;
