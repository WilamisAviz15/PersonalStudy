import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import style from "./Snackbar.module.scss";
import Icon from "../Icons";
import { SnackbarInterface } from "./interfaces/snackbar.interface";

const Snackbar = ({ message, type, duration = 99999999999, isActive, setIsActive }: SnackbarInterface) => {
  const closeSnackbar = () => setIsActive(false);

  const typeSnackbar = () => (type === "success" ? style["snackbar--success"] : style["snackbar--danger"]);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, duration);
  }, []);

  return ReactDOM.createPortal(
    <>
      {isActive ? (
        <div className={`${style.snackbar} ${typeSnackbar()}`}>
          <span>{message}</span>
          <Icon nameIcon="MdClose" click={closeSnackbar} />
        </div>
      ) : null}
    </>,
    document.getElementById("snackbar__root") as HTMLElement
  );
};

export default Snackbar;
