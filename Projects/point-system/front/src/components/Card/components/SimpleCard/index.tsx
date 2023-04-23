import React from "react";

import style from "./SimpleCard.module.scss";

function SimpleCard({ title, description }: { title: string; description: string }) {
  return (
    <div className={style.container}>
      <span>{title}</span>
      <span>{description}</span>
    </div>
  );
}

export default SimpleCard;
