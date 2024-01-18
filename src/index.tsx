import { createRoot } from "react-dom/client";
import { Layout } from "antd";

import "antd/dist/antd.css";

import "./index.scss";

import App from "./App";

// import * as serviceWorker from "./serviceWorker";

const rootElem = document.getElementById("root");

if (rootElem !== null) {
  createRoot(rootElem).render(
    <Layout>
      <App />
    </Layout>,
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
