import React from "react";
import style from "./Button.module.scss";

import { CustomStyles } from "../Card/interfaces/custom-style.interface";

const Button = ({ name, styles }: { name: string; styles?: CustomStyles }) => {
  return (
    <button className={style.btn} style={styles}>
      {name}
    </button>
  );
};

export default Button;
