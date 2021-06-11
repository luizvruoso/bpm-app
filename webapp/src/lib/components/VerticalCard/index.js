import React from "react";
import "./assets/styles/index.css";
import { Icon, InlineIcon } from "@iconify/react";
import heartbeatIcon from "@iconify/icons-ph/heartbeat";
import walkingIcon from "@iconify/icons-fa-solid/walking";
import alertUrgent24Filled from "@iconify/icons-fluent/alert-urgent-24-filled";
import patchCheckFill from "@iconify/icons-bi/patch-check-fill";

function VerticalCard(props) {
  if (props.type == 1) {
    return (
      <div
        className="containerVerticalCard"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="row">
          <div
            className="col-6"
            style={{ textAlign: "left", paddingLeft: 20, paddingTop: 5 }}
          >
            <Icon icon={heartbeatIcon} color={"#FD4755"} height={58} />
          </div>
          <div
            className="col-6"
            style={{ paddingTop: "10px", color: "#FFFFFF" }}
          >
            <span id="timeSpan">atualizado há 20 min</span>
          </div>
        </div>

        <div className="row avgLabel" style={{ color: "#FFFFFF" }}>
          <span>Média do dia</span>
        </div>
        <div className="row colectedData" style={{ color: "#FFFFFF" }}>
          <p>
            <span id="numberData">85</span> <span>bpm</span>
          </p>
        </div>

        <div
          className="faixaVertical"
          style={{ backgroundColor: "#FD4755" }}
        ></div>
      </div>
    );
  } else if (props.type == 2) {
    return (
      <div className="containerVerticalCard">
        <div className="row alertIcon">
          <Icon
            icon={alertUrgent24Filled}
            style={{ color: "#EBA605" }}
            height={90}
          />
          <p
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#053245",
              textAlign: "center",
            }}
          >
            Alertar
          </p>
        </div>

        <div
          className="faixaVerticalAlert"
          style={{ backgroundColor: "#EBA605" }}
        ></div>
      </div>
    );
  } else if (props.type == 3) {
    return (
      <div className="containerVerticalCard">
        <div className="row">
          <div
            className="col-6"
            style={{ textAlign: "left", paddingLeft: 20, paddingTop: 5 }}
          >
            <Icon icon={walkingIcon} color={"#308940"} height={58} />
          </div>
          <div
            className="col-6"
            style={{ paddingTop: "10px", color: "#053245" }}
          >
            <span id="timeSpan">atualizado há 20 min</span>
          </div>
        </div>

        <div className="row avgLabel" style={{ color: "#053245" }}>
          <span>Média do dia</span>
        </div>
        <div className="row colectedData" style={{ color: "#053245" }}>
          <p>
            <span id="numberData">1200</span> <span>passos</span>
          </p>
        </div>

        <div
          className="faixaVertical"
          style={{ backgroundColor: "#308940" }}
        ></div>
      </div>
    );
  } else if (props.type == 4) {
    return (
      <div className="containerVerticalCard">
        <div className="row">
          <div
            className="col-6"
            style={{ textAlign: "left", paddingLeft: 20, paddingTop: 5 }}
          >
            <Icon icon={patchCheckFill} color={"#0186B0"} height={58} />
          </div>
        </div>

        <div className="row statusUser" style={{ color: "#053245" }}>
          <p>
            <span id="statusUserSpan">Você está bem!</span>
          </p>
        </div>

        <div
          className="faixaVertical"
          style={{ backgroundColor: "#0186B0" }}
        ></div>
      </div>
    );
  }
}

export default VerticalCard;
