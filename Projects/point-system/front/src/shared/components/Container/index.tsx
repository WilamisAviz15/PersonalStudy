import React from "react";

import Header from "../Header";
import style from "./Container.module.scss";

const Container = ({
  titleComponent,
  nameIcon,
  children,
}: {
  titleComponent: string;
  nameIcon: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <main>
      <Header nameIcon={nameIcon} titleComponent={titleComponent} />
      <div className={style.container}>{children}</div>
    </main>
  );
};

export default Container;
