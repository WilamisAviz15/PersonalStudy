import React from "react";
import "./styles.css";

const TextField = (props) => {
  const handleTextInput = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleTextInput}
      />
    </div>
  );
};

export default TextField;
