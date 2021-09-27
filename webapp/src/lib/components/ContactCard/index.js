import React from "react";
import "./assets/contact.css";

function Contact(props) {
  return (
    <div
      className="contactCard"
      style={{
        backgroundColor: "#FFFFFF",
        borderRight: "10px solid #6F6F6F",
        borderRadius: "20px",
      }}
    >
      <div className="photo">
        <img src="./assets/img/idoso.png" />
        <span id="contactName">Victor Soldera Xhu</span>
      </div>
    </div>
  );
}

export default Contact;
