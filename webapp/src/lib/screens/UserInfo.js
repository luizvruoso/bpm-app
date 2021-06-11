import React, { Component } from "react";
import VerticalCard from "../components/VerticalCard/index";
import Header from "../components/Header/index";

class UserInfo extends Component {
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
          <div className="col-3">
            <VerticalCard type={1} />
          </div>
          <div className="col-3">
            <VerticalCard type={2} />
          </div>
          <div className="col-3">
            <VerticalCard type={1} />
          </div>
          <div className="col-3">
            <VerticalCard type={1} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
