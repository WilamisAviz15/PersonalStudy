import React from "react";

import style from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <article className={style.article}>
      <span id={style.highlight}>404</span>
      <span>Página não encontrada</span>
    </article>
  );
};

export default NotFound;
