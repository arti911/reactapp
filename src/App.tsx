import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";

import MainPage from "./components/Main";
import Aviasales from "./Aviasales";
import Calculator from "./Calculator";

const { Content, Header } = Layout;

const App = () => (
  <HashRouter>
    <Header>
      <Link to="/">Главная</Link>
    </Header>
    <Content>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="aviasales" element={<Aviasales />} />
        <Route path="calculator" element={<Calculator />} />
      </Routes>
    </Content>
  </HashRouter>
);

export default App;
