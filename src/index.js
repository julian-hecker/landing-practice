import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./router";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  rootElement
);
