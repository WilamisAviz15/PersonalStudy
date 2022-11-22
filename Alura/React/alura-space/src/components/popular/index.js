import React from "react";
import styles from "./styles.module.scss";
import popularPictures from "./popular-pictures.json";

const Popular = () => {
  return (
    <aside className={styles.popular}>
      <h2>Populares</h2>
      <ul className={styles.popular__images}>
        {popularPictures.map((popularPic) => {
          return (
            <li key={popularPic.id}>
              <img src={popularPic.path} alt={popularPic.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
};

export default Popular;
