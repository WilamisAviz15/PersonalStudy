import React, { useEffect, useState } from "react";

import style from "./Snackbar.module.scss";
import Icon from "../Icons";

type snackBarClassType = "success" | "danger";

const Snackbar = ({
  message,
  duration = 5000,
  type,
}: {
  message: string;
  duration?: number;
  type: snackBarClassType;
}) => {
  const typeSnackbar = () => (type === "success" ? style["snackbar--success"] : style["snackbar--danger"]);
  const [isActive, setIsActive] = useState(true);
  const closeSnackbar = () => setIsActive(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, duration);
  }, []);

  return (
    <>
      {isActive && (
        <div className={`${style.snackbar} ${typeSnackbar()}`}>
          <span>{message}</span>
          <Icon nameIcon="MdClose" click={closeSnackbar} />
        </div>
      )}
    </>
  );
};

export default Snackbar;
