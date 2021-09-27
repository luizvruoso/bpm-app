import React, { useState } from "react";
import "./assets/styles/index.css";
import { Icon, InlineIcon } from "@iconify/react";
import warningIcon from "@iconify/icons-emojione-v1/warning";
import circleMinus from "@iconify/icons-akar-icons/circle-minus";

export default function Index(props) {
  if (props.type == 1) {
    return (
      <div
        style={{ backgroundColor: "#FAFAFA", width: "100%", padding: "25px" }}
      >
        <div className="row">
          <div className="col-2 align-self-center">
            <Icon icon={warningIcon} height={50} />
          </div>
          <div className="col-10 " style={{ display: "grid" }}>
            <span>
              <b>04/02/2021 20:52:20</b>
            </span>
            <span>Alarme Falso. Você cancelou uma chamada</span>
          </div>
        </div>
      </div>
    );
  }
  if (props.type == 2) {
    return (
      <div
        style={{ backgroundColor: "#FAFAFA", width: "100%", padding: "25px" }}
      >
        <div className="row">
          <div className="col-2 align-self-center">
            <Icon icon={circleMinus} height={50} />
          </div>
          <div className="col-10 " style={{ display: "grid" }}>
            <span>
              <b>04/02/2021 20:52:20</b>
            </span>
            <span>Alarme Falso. Você cancelou uma chamada</span>
          </div>
        </div>
      </div>
    );
  }
}
