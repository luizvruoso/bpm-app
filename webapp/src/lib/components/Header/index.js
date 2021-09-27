import React from "react";
import "./assets/index.css";

function Header(props) {
  return (
    <div className="titlePage">
      <span className="spanText">{props.content}</span>
    </div>
  );
}

export default Header;
