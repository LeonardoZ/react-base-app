import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouterConfig from "./navigation/RouterConfig";
import { GlobalContextProvider } from "./GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterConfig />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
