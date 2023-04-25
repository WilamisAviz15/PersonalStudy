import React from "react";

import Input from "../Input";
import { HTMLInputTypes } from "../Input/interfaces/input.interface";
import { CustomStyles } from "../Card/interfaces/custom-style.interface";
import style from "./InputLabel.module.scss";

const InputLabel = ({
  label,
  input,
}: {
  label: string;
  input: { type: HTMLInputTypes; placeholder: string; styles?: CustomStyles };
}) => {
  return (
    <div className={style.input__label}>
      <label>{label}</label>
      <Input type={input.type} placeholder={input.placeholder} styles={input.styles} />
    </div>
  );
};

export default InputLabel;
