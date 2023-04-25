import React from "react";

import style from "./Footer.module.scss";
import Icon from "../Icons";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        <Icon nameIcon="MdAdd" />
      </div>
    </footer>
  );
};

export default Footer;
