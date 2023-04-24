import React from "react";

import style from "./TextCard.module.scss";

interface customStyles {
  [key: string]: string;
}

function TextCard({ description, styles }: { description: string; styles?: customStyles }) {
  return (
    <div className={style.container} style={styles}>
      <span>{description}</span>
    </div>
  );
}

export default TextCard;
