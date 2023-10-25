import React from "react";
import "./inputBox.css";
import Text from "../text/text";

const InputBox = ({ value, name, onChange, placeholder }) => {
  return (
    <div className="initBox">
      <Text name={name}></Text>
      <input
        className="defaultText"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBox;
