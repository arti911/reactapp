import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { Layout } from "antd";

import "antd/dist/antd.css";

import './index.scss';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <Layout>
      <App />
    </Layout>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
