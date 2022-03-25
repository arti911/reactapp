import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import MainPage from "./components/Main";
import Aviasales from "./Aviasales";
import English from "./English";

const { Content } = Layout;

const App = () => (
  <Content>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/aviasales" element={<Aviasales />} />
      <Route path="/english" element={<English />} />
    </Routes>
  </Content>
);

export default App;
