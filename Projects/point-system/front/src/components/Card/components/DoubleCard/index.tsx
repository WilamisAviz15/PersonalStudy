import React from "react";
import { IconType } from "react-icons";

import Icon from "../../../../shared/components/Icons";
import style from "./DoubleCard.module.scss";
import { CustomStyles } from "../../interfaces/custom-style.interface";

function DoubleCard({ title, img, styles }: { title: string; img: keyof IconType; styles?: CustomStyles }) {
  return (
    <div className={style.container} style={styles}>
      <span>{title}</span>
      <Icon nameIcon={img} />
    </div>
  );
}

export default DoubleCard;
