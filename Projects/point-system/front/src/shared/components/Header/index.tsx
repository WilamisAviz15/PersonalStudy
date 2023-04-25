import React from "react";

import style from "./Header.module.scss";
import Icon from "../Icons";

const Header = ({ titleComponent, nameIcon }: { titleComponent: string; nameIcon: string }) => {
  return (
    <header className={style.header}>
      <Icon nameIcon={nameIcon} />
      <span>{titleComponent}</span>
    </header>
  );
};

export default Header;
