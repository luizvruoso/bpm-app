import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./screens/App";
import Dashboard from "./screens/Dashboard";
import VerticalMenu from "./components/VerticalMenu/index";
import UserInfo from "./screens/UserInfo";
import Batimentos from "./screens/Batimentos";
import Passos from "./screens/Passos";

export default function Routes() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Router className="col-12">
          <VerticalMenu className="col-3" />

          <Switch className="col-9">
            <Route path="/App">
              <App />
            </Route>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/user-info">
              <UserInfo />
            </Route>
            <Route path="/batimentos">
              <Batimentos />
            </Route>
            <Route path="/passos">
              <Passos />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
