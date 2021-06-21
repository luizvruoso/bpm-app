import React, { Component } from "react";
import Card from "../components/Card/index";
import Header from "../components/Header/index";
import addCircle32Filled from "@iconify/icons-fluent/add-circle-32-filled";
import { Icon, InlineIcon } from "@iconify/react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalRoot from "../components/Modal/ModalRoot";
import ModalService from "../components/Modal/services/ModalService";
import TestModal from "../components/Modal/ModalUpdated";
import WarningList from "../components/WarningList/index";
import fileReport from "@iconify/icons-majesticons/file-report";

class Alertas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const addModal = () => {
      ModalService.open(TestModal);
    };

    return (
      <div
        className="container-fluid"
        style={{ height: "100vh", width: "100%", overflowX: "hidden" }}
      >
        <div className="row ">
          <Header content={"Dependentes > Alertas"} />
        </div>
        <div className="row">
          <div className="d-grid justify-content-center">
            <p>
              <Icon
                icon={fileReport}
                style={{ color: "#7CC7B9", marginBottom: "10px" }}
                height={50}
              />
              <span
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "#053245",
                  marginTop: 10,
                }}
              >
                Relatório de Alertas
              </span>
            </p>
          </div>
        </div>
        <div className="d-grid justify-content-center">
          <WarningList type={2} />
          <WarningList type={1} />
          <WarningList type={1} />
          <WarningList type={2} />
          <WarningList type={1} />
          <WarningList type={1} />
        </div>
      </div>
    );
  }
}

export default Alertas;
