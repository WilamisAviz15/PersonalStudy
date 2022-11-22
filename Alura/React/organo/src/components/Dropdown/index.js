import React from "react";
import "./styles.css";

const Dropdown = (props) => {
  const options = props.items.map((item) => <option key={item}>{item}</option>);

  const handleOptionSelected = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select value={props.value} onChange={handleOptionSelected}>
        <option value=""></option>
        {options}
      </select>
    </div>
  );
};

export default Dropdown;
