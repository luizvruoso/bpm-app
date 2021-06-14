import React, { Component } from "react";
import Card from "../components/Card/index";
import Header from "../components/Header/index";
import addCircle32Filled from "@iconify/icons-fluent/add-circle-32-filled";
import { Icon, InlineIcon } from "@iconify/react";
import heartbeatIcon from "@iconify/icons-ph/heartbeat";
import { Bar } from "react-chartjs-2";
import VerticalCard from "../components/VerticalCard";
import patchCheckFill from "@iconify/icons-bi/patch-check-fill";
import walkingIcon from "@iconify/icons-fa-solid/walking";

const data = {
  labels: [
    "Segunda",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
    "Domingo",
    "Segunda",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
    "Domingo",
    "Segunda",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
    "Domingo",
  ],
  datasets: [
    {
      label: "metros",
      data: [
        800, 950, 1200, 680, 870, 900, 800, 950, 1900, 680, 870, 900, 800, 950,
        200, 680, 870, 900, 800, 950, 1500, 680, 870, 900,
      ],
      backgroundColor: ["rgb(48, 137, 64)"],
      borderColor: ["rgba(255, 255, 255, 1)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "x",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

class Batimentos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="col-12 containerDash"
        style={{ height: "100vh", overflowX: "auto" }}
      >
        <div className="row">
          <Header content={"Dashboard > Passos"} />
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              style={{
                margin: "10px",
                border: "1px solid #CCC",
                borderRadius: 15,
                minHeight: "800px",
                height: "800px",
                paddingBottom: "10px",
              }}
            >
              <div className="row">
                <div className="col-2">
                  <div className="photoUserInfo">
                    <img src="./assets/img/idoso.png" />
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="detailedInfoUserInfo"
                    style={{ paddingTop: 30, marginLeft: "-30px" }}
                  >
                    <span id="patientTitleUserInfo">Paciente</span>
                    <br />
                    <span id="patientNameUserInfo">Jorge Felicio Guedes</span>
                    <br />
                    <span id="bdaySpanUserInfo">01/06/1931</span>
                  </div>
                </div>
                <div className="col-7" style={{ marginTop: "20px" }}>
                  <div className="row">
                    <div
                      className="col-2"
                      style={{ fontWeight: "bold", fontSize: 20 }}
                    >
                      <Icon icon={walkingIcon} color={"#308940"} height={90} />
                    </div>
                    <div
                      className="col-10"
                      style={{ marginTop: 10, display: "grid" }}
                    >
                      <span style={{ fontWeight: "bold", fontSize: 22 }}>
                        0,5 - 5,0 Km
                      </span>
                      <span
                        style={{
                          fontWeight: "initial",
                          fontSize: 15,
                          marginTop: "-25px",
                        }}
                      >
                        dez - fev
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3">
                  <div
                    style={{
                      width: "100%",
                      margin: 20,
                      padding: 15,
                      borderRadius: 10,
                      border: "1px solid #CCC",
                    }}
                  >
                    <Icon icon={patchCheckFill} color={"#0186B0"} height={40} />
                    <span style={{ marginLeft: 10 }}>Continue assim!</span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-lg-12"
                  style={{ width: "95%", height: 150, margin: "0 auto" }}
                >
                  <Bar data={data} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Batimentos;
