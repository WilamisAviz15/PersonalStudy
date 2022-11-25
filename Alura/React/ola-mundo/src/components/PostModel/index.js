import styles from "./styles.module.css";

import React from "react";

const PostModel = ({ fotoCapa, titulo, children }) => {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>
      <h2 className={styles.titulo}>{titulo}</h2>
      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  );
};

export default PostModel;
