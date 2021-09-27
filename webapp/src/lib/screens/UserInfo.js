import React, { Component } from "react";
import VerticalCard from "../components/VerticalCard/index";
import Header from "../components/Header/index";
import GoogleMapReact from "google-map-react";
import "../assets/styles/userInfo.css";

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }
  /**
   * <div className="row">
          <Header content={"Dashboard > Dependente"} />
        </div>
   */
  render() {
    return (
      <div
        className="col-12 containerDash"
        style={{ height: "100vh", overflowX: "auto" }}
      >
        <div className="row">
          <Header content={"Dashboard > Dependente"} />
        </div>
        <div className="row">
          <div className="col-lg-2 col-12">
            <div className="photoUserInfo">
              <img src="./assets/img/idoso.png" />
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="detailedInfoUserInfo" style={{}}>
              <span id="patientTitleUserInfo">Paciente</span>
              <br />
              <span id="patientNameUserInfo">Jorge Felicio Guedes</span>
              <br />
              <span id="bdaySpanUserInfo">01/06/1931</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-12">
            <VerticalCard type={1} />
          </div>
          <div className="col-lg-3 col-12">
            <VerticalCard type={2} />
          </div>
          <div className="col-lg-3 col-12">
            <VerticalCard type={3} />
          </div>
          <div className="col-lg-3 col-12">
            <VerticalCard type={4} />
          </div>
        </div>
        <div className="row">
          <div
            id="iframeDiv"
            style={{
              height: "48vh",
              width: "100%",
              marginBottom: "20px",
              padding: 0,
            }}
          >
            <iframe
              width={"95%"}
              height={"100%"}
              style={{ border: 0 }}
              loading={"lazy"}
              allowfullscreen
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAwysi39XxFYPOtew_AnTniRcOnp5bmml0&q=Space+Needle,Seattle+WA"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
