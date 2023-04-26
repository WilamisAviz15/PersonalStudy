import React from "react";
import style from "./Button.module.scss";

import { CustomStyles } from "../Card/interfaces/custom-style.interface";

const Button = ({ name, styles, click }: { name: string; styles?: CustomStyles; click?: () => void }) => {
  return (
    <button className={style.btn} style={styles} onClick={click}>
      {name}
    </button>
  );
};

export default Button;
