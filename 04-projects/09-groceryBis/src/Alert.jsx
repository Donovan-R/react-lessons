import React from "react";

const Alert = ({ ...alert }) => {
  if (alert) {
    const { msg, type } = alert;
    return <p className="alert">{msg} ddddd</p>;
  } else {
    ("");
  }
};

export default Alert;
