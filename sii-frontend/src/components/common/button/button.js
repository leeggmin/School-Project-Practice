import React from "react";
import "./button.css";

const Button = ({ name, selected, onClick }) => {
  return (
    <button
      className={`btnType1 ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
