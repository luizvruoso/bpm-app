import React from "react";
import "./assets/contact.css";

function Contact(props) {
  return (
    <div className="contactCard">
      <div className="photo">
        <img src="./assets/img/idoso.png" />
        <span id="contactName">Clebinho Dinamite v2</span>
      </div>
      <div className="faixaContato"></div>
    </div>
  );
}

export default Contact;
