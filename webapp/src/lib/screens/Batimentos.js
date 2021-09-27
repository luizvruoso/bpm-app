import React, { Component } from "react";
import Card from "../components/Card/index";
import Header from "../components/Header/index";
import addCircle32Filled from "@iconify/icons-fluent/add-circle-32-filled";
import { Icon, InlineIcon } from "@iconify/react";
import heartbeatIcon from "@iconify/icons-ph/heartbeat";
import VerticalCard from "../components/VerticalCard";
import patchCheckFill from "@iconify/icons-bi/patch-check-fill";
import { options, dataFinal } from "../components/Chart/index";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

class Batimentos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div
        className="col-12 containerDash"
        style={{ height: "100vh", overflowX: "auto" }}
      >
        <div className="row">
          <Header content={"Dashboard > Batimentos"} />
        </div>

        <div className="row">
          <div className="col-lg-12 col-12 ">
            <div
              style={{
                margin: "10px",
                border: "1px solid #CCC",
                borderRadius: 15,
                minHeight: "800px",
                height: "900px",
                paddingBottom: "10px",
              }}
            >
              <div className="row">
                <div className="col-lg-2 col-12 ">
                  <div className="photoUserInfo">
                    <img src="./assets/img/idoso.png" />
                  </div>
                </div>
                <div className="col-lg-3 col-12">
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
                <div className="col-lg-7 col-12" style={{ marginTop: "20px" }}>
                  <div className="row">
                    <div
                      className="col-lg-2 col-4"
                      style={{ fontWeight: "bold", fontSize: 20 }}
                    >
                      <Icon
                        icon={heartbeatIcon}
                        color={"#FD4755"}
                        height={90}
                      />
                    </div>
                    <div
                      className="col-lg-10 col-8"
                      style={{ marginTop: 10, display: "grid" }}
                    >
                      <span style={{ fontWeight: "bold", fontSize: 22 }}>
                        80 - 120 bpm
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

              <div className="row iconHeart">
                <div className="col-lg-3 col-12">
                  <div
                    style={{
                      width: "90%",
                      margin: 20,
                      padding: 15,
                      borderRadius: 10,
                      border: "1px solid #CCC",
                    }}
                  >
                    <Icon icon={patchCheckFill} color={"#0186B0"} height={40} />
                    <span style={{ marginLeft: 10 }}>Tudo parece bem!</span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-lg-12 col-12"
                  style={{ width: "95%", minHeight: 500, margin: "0 auto" }}
                >
                  <Line data={dataFinal.data} options={options.options} />
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
