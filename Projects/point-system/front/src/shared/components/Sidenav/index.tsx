import React from "react";

import Sidebar from "../../../components/Sidebar";
import style from "./Sidenav.module.scss";

const Sidenav = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className={style.sidenav__container}>
      <Sidebar />
      {children}
    </div>
  );
};

export default Sidenav;
