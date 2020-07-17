import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import "antd/dist/antd.css";
import "./style/index.less";
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/Dashboard" push />} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      <Route component={Error} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
