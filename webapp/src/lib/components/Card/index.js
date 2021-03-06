import React from "react";
import "./assets/card.css";
//import logo from '../../assets/imgs/idoso.png';
import { Icon, InlineIcon } from "@iconify/react";
import walkingIcon from "@iconify/icons-fa-solid/walking";
import heartbeatIcon from "@iconify/icons-ph/heartbeat";
/*<div className="faixa"></div> */
function Card(props) {
  return (
    <div className="containerCard">
      <div className="row faixa" style={{}}>
        <div className="col-lg-2 col-12">
          <div className="photo">
            <img src="./assets/img/idoso.png" />
          </div>
        </div>
        <div className="col-lg-3 col-12 center">
          <div className="detailedInfo">
            <span id="patientTitle">Paciente</span>
            <br />
            <span id="patientName">Jorge Felicio Guedes</span>
            <br />
            <span id="bdaySpan">01/06/1931</span>
          </div>
        </div>
        <div className="col-lg-3 col-12 center">
          <div className="row stepContainer">
            <div className="col-6 iconCard">
              <Icon icon={walkingIcon} color={"#308940"} height={58} />
            </div>
            <div className="col-6">
              <p id="titleSteps">
                1200
                <br />
                <span id="contentSteps">passos</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12 center">
          <div className="row heartContainer">
            <div className="col-6 iconCard">
              <Icon icon={heartbeatIcon} color={"#FD4755"} height={58} />
            </div>
            <div className="col-6 ">
              <p id="titleSteps">
                80
                <br />
                <span id="contentSteps">bpm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
