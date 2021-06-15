import React, { Component } from "react";
import Header from "../components/Header/index";
import Contact from "../components/ContactCard/index";
import { Icon, InlineIcon } from "@iconify/react";
import addCircle20Filled from "@iconify/icons-fluent/add-circle-20-filled";
import "../components/ContactCard/assets/contact.css";

class ContactList extends Component {
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
          <Header content={"Dashboard > Contatos de alerta"} />
        </div>

        <Icon icon={addCircle20Filled} color={"#6F6F6F"} height={50} />

        <div>
          <span
            style={{
              marginLeft: "60px",
              position: "relative",
              top: "-40px",
              marginBottom: "-30px",
            }}
          >
            {" "}
            Contato
          </span>
        </div>

        <div className="row">
          <Contact />
          <Contact />
          <Contact />
        </div>
      </div>
    );
  }
}

export default ContactList;
