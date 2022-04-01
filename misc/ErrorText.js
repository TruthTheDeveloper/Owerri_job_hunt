import React from "react";

const ErrorText = ({ text }) => {
  return text.length > 0 && <p className="ml-5" style={{ fontSize:"12px", color:"crimson"}}>{text}</p>;
};

export default ErrorText;
