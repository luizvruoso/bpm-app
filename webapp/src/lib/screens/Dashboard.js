import React, { Component } from "react";
import Card from "../components/Card/index";
import Header from "../components/Header/index";
import addCircle32Filled from "@iconify/icons-fluent/add-circle-32-filled";
import { Icon, InlineIcon } from "@iconify/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalRoot from '../components/Modal/ModalRoot'
import ModalService from '../components/Modal/services/ModalService'
import TestModal from '../components/Modal/ModalUpdated'

class Dashboard extends Component {
  constructor(props) {
    super(props);   
  }
  
  render() {

    const addModal = () => {
      ModalService.open(TestModal);
    };

    return (
      <div
        className="col-10 containerDash"
        style={{ height: "100vh", overflowX: "auto" }}
      >
        <div className="row">
          <Header content={"Dashboard"} />
        </div>
        <div>
        <ModalRoot />
        <button style={{outline: 'none', background: 'none', border: 'none', paddingLeft: "30px", paddingTop: "20px"}}  onClick={ addModal } className="btn btn-primary m-4" >
            <Icon
              icon={addCircle32Filled}
              style={{color: "#2B374F"}}
              height={30}
            />
          </button>
          <div><span style={{marginLeft: "90px", position: "relative", top: "-57px", marginBottom: "-30px"}}> Dependente</span></div>
          
      </div>

        <div className="row">
          <a style={{ textDecoration: "none" }} href="/user-info">
            <Card />
          </a>
          <a style={{ textDecoration: "none" }} href="/user-info">
            <Card />
          </a>
          <a style={{ textDecoration: "none" }} href="/user-info">
            <Card />
          </a>
          <a style={{ textDecoration: "none" }} href="/user-info">
            <Card />
          </a>
        </div>
      </div>
    );
  }
}

export default Dashboard;
