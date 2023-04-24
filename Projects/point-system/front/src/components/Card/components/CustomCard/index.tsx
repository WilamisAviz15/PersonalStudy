import React from "react";

import style from "./CustomCard.module.scss";
import { CustomStyles } from "../../interfaces/custom-style.interface";

const CustomCard = ({
  children,
  styles,
}: {
  children: JSX.Element | JSX.Element[] | undefined;
  styles: CustomStyles | undefined;
}) => {
  return (
    <div className={style.container} style={styles}>
      {children}
    </div>
  );
};

export default CustomCard;
