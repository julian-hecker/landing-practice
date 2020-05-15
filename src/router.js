import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./components/App";
import Login from "./components/Login";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
