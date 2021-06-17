import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./screens/App";
import Dashboard from "./screens/Dashboard";
import VerticalMenu from "./components/VerticalMenu/index";
import UserInfo from "./screens/UserInfo";
import Batimentos from "./screens/Batimentos";
import Passos from "./screens/Passos";
import ContactList from "./screens/ContactList";

export default function Routes() {
  const [menuSize, setMenuSize] = useState(1);

  return (
    <div className="container-fluid">
      <div className="row">
        <Router>
          <div
            className={"d-none d-sm-block d-lg-block  col-" + menuSize}
            style={{ paddingLeft: 8, backgroundColor: "#e5e5e5" }}
          >
            <VerticalMenu setMenuSize={setMenuSize} />
          </div>
          <div className={"col-" + (12 - menuSize)} style={{ padding: 0 }}>
            <Switch>
              <Route path="/App">
                <App />
              </Route>
              <Route path="/dependentes" exact>
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
              <Route path="/contact-list">
                <ContactList />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}
