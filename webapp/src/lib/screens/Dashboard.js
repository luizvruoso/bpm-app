import React, { Component } from "react";
import Card from "../components/Card/index";
import Header from "../components/Header/index";
import addCircle32Filled from "@iconify/icons-fluent/add-circle-32-filled";
import { Icon, InlineIcon } from "@iconify/react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalRoot from "../components/Modal/ModalRoot";
import ModalService from "../components/Modal/services/ModalService";
import TestModal from "../components/Modal/ModalUpdated";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const addModal = () => {
      ModalService.open(TestModal);
    };

    return (
      <div
        className="containerDash"
        style={{ height: "100vh", overflowX: "hidden" }}
      >
        <div className="row ">
          <Header content={"Dashboard"} />
        </div>
        <div className="row ">
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
