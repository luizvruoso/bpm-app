import React, { Component } from "react";
import Header from "../components/Header/index";
import Contact from "../components/ContactCard/index";
import { Icon, InlineIcon } from "@iconify/react";
import "../components/ContactCard/assets/contact.css";
import addCircle32Filled from "@iconify/icons-fluent/add-circle-32-filled";

class ContactList extends Component {
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
          <Header content={"Dashboard > Contatos de alerta"} />
        </div>

        <div className="row">
          <p style={{ paddingLeft: "30px", paddingTop: "20px" }}>
            <Icon
              icon={addCircle32Filled}
              style={{ color: "#2B374F" }}
              height={30}
            />
            <span> Contato</span>
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-12">
            <Contact />
          </div>
          <div className="col-lg-4 col-12">
            <Contact />
          </div>
          <div className="col-lg-4 col-12">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactList;
