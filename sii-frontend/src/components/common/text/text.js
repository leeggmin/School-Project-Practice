import React from "react";
import "./text.css";

const Text = ({ name }) => {
  return (
    <p className="explanation" name={name}>
      {name}
    </p>
  );
};

export default Text;
