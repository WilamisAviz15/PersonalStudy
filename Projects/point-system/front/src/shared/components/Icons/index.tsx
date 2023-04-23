import React from "react";

import { IconType } from "react-icons/lib";
import * as MaterialDesign from "react-icons/md";

const Icon = ({ nameIcon }: { nameIcon: keyof IconType }) => {
  return <span>{React.createElement(MaterialDesign[`${nameIcon}`] as IconType)}</span>;
};

export default Icon;
