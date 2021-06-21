import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./screens/App";
import Dashboard from "./screens/Dashboard";
import VerticalMenu from "./components/VerticalMenu/index";
import UserInfo from "./screens/UserInfo";
import Batimentos from "./screens/Batimentos";
import Passos from "./screens/Passos";
import ContactList from "./screens/ContactList";
import Alertas from "./screens/Alertas";

import MenuMobile from "./components/MobileMenu/index";
export default function Routes() {
  const [menuSize, setMenuSize] = useState(1);
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";

  return (
    <div className="container-fluid" style={{ margin: 0 }}>
      <div className="row">
        <Router>
          <div
            className={"d-none d-sm-block d-lg-block  col-" + menuSize}
            style={{ paddingLeft: 8, backgroundColor: "#e5e5e5" }}
          >
            <VerticalMenu setMenuSize={setMenuSize} />
          </div>
          <div
            className={"d-block d-sm-none col-12"}
            style={{ height: 60, color: "#000000", padding: 0 }}
          >
            <MenuMobile />
          </div>
          <div className={"col-lg-" + (12 - menuSize)} style={{ padding: 0 }}>
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
              <Route path="/alertas">
                <Alertas />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}
