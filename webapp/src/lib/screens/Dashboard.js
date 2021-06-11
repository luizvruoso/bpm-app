import React, { Component } from "react";
import Card from "../components/Card/index";
import Header from "../components/Header/index";
import addCircle32Filled from "@iconify/icons-fluent/add-circle-32-filled";
import { Icon, InlineIcon } from "@iconify/react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="col-10 containerDash"
        style={{ height: "100vh", overflowX: "auto" }}
      >
        <div className="row">
          <Header content={"Dashboard"} />
        </div>
        <div className="row">
          <p style={{ paddingLeft: "30px", paddingTop: "20px" }}>
            <Icon
              icon={addCircle32Filled}
              style={{ color: "#2B374F" }}
              height={30}
            />
            <span> Dependente</span>
          </p>
        </div>

        <div className="row">
          <a style={{ textDecoration: "none" }} href="/user-info">
            <Card />
          </a>
          <a style={{ textDecoration: "none" }} href="/user-info">
            <Card />
          </a>
          <a style={{ textDecoration: "none" }} href="/user-info">
            <Card />
          </a>
          <a style={{ textDecoration: "none" }} href="/user-info">
            <Card />
          </a>
        </div>
      </div>
    );
  }
}

export default Dashboard;
