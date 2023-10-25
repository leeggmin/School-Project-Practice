import React from "react";
import "./button.css";

const Button = ({ name, selected, setSelected }) => {
  const handleClick = () => {
    setSelected(name);
  };

  return (
    <button
      className={`btnType1 ${selected ? "selected" : ""}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
