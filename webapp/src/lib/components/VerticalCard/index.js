import React from "react";
import "./assets/styles/index.css";
import { Icon, InlineIcon } from "@iconify/react";
import walkingIcon from "@iconify/icons-fa-solid/walking";
import heartbeatIcon from "@iconify/icons-ph/heartbeat";

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
        <div className="row">
          <div
            className="col-6"
            style={{ textAlign: "left", paddingLeft: 20, paddingTop: 5 }}
          >
            <Icon icon={heartbeatIcon} color={"#FD4755"} height={58} />
          </div>
          <div className="col-6" style={{ paddingTop: "10px" }}>
            <span id="timeSpan">atualizado há 20 min</span>
          </div>
        </div>

        <div className="row colectedData">
          <p>
            <span id="numberData">85</span> <span>bpm</span>
          </p>
        </div>

        <div
          className="faixaVertical"
          style={{ backgroundColor: "#EBA605" }}
        ></div>
      </div>
    );
  }
}

export default VerticalCard;
