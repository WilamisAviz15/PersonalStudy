import React from "react";

import { IconType } from "react-icons/lib";
import * as MaterialDesign from "react-icons/md";
import { CustomStyles } from "../../../components/Card/interfaces/custom-style.interface";

const Icon = ({ nameIcon, styles, click }: { nameIcon: string; styles?: CustomStyles; click?: () => any }) => {
  return (
    <span style={styles} onClick={click}>
      {React.createElement(MaterialDesign[`${nameIcon}`] as IconType)}
    </span>
  );
};

export default Icon;
