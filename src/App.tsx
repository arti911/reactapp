import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import MainPage from "./components/Main";
import Aviasales from "./Aviasales";

const { Content } = Layout;

const App = () => (
  <Content>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/aviasales" element={<Aviasales />} />
    </Routes>
  </Content>
);

export default App;
