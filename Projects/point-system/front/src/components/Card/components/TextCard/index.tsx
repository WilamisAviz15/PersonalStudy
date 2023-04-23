import React from "react";

import style from "./TextCard.module.scss";

function TextCard({ description }: { description: string }) {
  return (
    <div className={style.container}>
      <span>{description}</span>
    </div>
  );
}

export default TextCard;
