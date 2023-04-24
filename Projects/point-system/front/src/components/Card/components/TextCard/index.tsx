import React from "react";

import style from "./TextCard.module.scss";
import { CustomStyles } from "../../interfaces/custom-style.interface";

function TextCard({ description, styles }: { description: string; styles?: CustomStyles }) {
  return (
    <div className={style.container} style={styles}>
      <span>{description}</span>
    </div>
  );
}

export default TextCard;
