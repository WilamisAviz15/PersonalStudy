import React from "react";

import style from "./SimpleCard.module.scss";
import { CustomStyles } from "../../interfaces/custom-style.interface";

function SimpleCard({ title, description, styles }: { title: string; description: string; styles?: CustomStyles }) {
  return (
    <div className={style.container} style={styles}>
      <span>{title}</span>
      <span>{description}</span>
    </div>
  );
}

export default SimpleCard;
