import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import CONSTANTS from "./Constants";
import About from "../pages/About/About";
import App from "../pages/App/App";
import NotFound from "../pages/NotFound/NotFound.js";

export default function RouterConfig() {
  return (
    <Router>
      <Switch>
        <Route exact path={CONSTANTS.app}>
          <App />
        </Route>
        <Route path={CONSTANTS.about}>
          <About />
        </Route>
        <Route>
            <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
