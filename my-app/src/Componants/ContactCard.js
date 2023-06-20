import React from "react";
import User from "../images/User.png"

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item" key={id}>
      <img className="ui avatar image" src={User} alt="User" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "10px" }}
      ></i>
    </div>
  );
}
