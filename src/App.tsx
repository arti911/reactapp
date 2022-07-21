import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";

import MainPage from "./pages/Main";
import Aviasales from "./pages/Aviasales";
import Calculator from "./pages/Calculator";

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
