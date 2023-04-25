import React from "react";

import style from "./Input.module.scss";
import { HTMLInputTypes } from "./interfaces/input.interface";
import { CustomStyles } from "../Card/interfaces/custom-style.interface";

const Input = ({ placeholder, type, styles }: { placeholder: string; type: HTMLInputTypes; styles?: CustomStyles }) => {
  return <input type={type} style={styles} className={style.input} placeholder={placeholder}></input>;
};

export default Input;
