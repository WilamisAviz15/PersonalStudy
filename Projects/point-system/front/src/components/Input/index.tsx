import React from "react";

import style from "./Input.module.scss";
import { InputInterface } from "./interfaces/input.interface";

const Input = ({ placeholder, type, styles, value, onChange }: InputInterface) => {
  return (
    <input
      type={type}
      style={styles}
      className={style.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;
