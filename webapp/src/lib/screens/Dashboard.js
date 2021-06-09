import React, { Component } from "react";
import Card from "../components/Card/index";
import Header from "../components/Header/index";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-10 containerDash" style={{height: '100vh', overflowX: 'auto'}} >
        <div className="row">
          <Header content={"Dashboard"} />
        </div>

        <div className="row" >
          
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    );
  }
}

export default Dashboard;
