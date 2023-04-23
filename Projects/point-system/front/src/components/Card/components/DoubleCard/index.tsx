import React from "react";
import { IconType } from "react-icons";

import Icon from "../../../../shared/components/Icons";

import style from "./DoubleCard.module.scss";

function DoubleCard({ title, img }: { title: string; img: keyof IconType }) {
  return (
    <div className={style.container}>
      <span>{title}</span>
      <Icon nameIcon={img} />
    </div>
  );
}

export default DoubleCard;
