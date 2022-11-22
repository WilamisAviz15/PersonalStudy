import React from "react";
import styles from "./styles.module.scss";
import pictures from "../gallery/pictures.json";

const Tags = ({ tags, onFilterPictures, setItems }) => {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => (
          <li key={tag} onClick={() => onFilterPictures(tag)}>
            {tag}
          </li>
        ))}
        <li onClick={() => setItems(pictures)}>Todas</li>
      </ul>
    </div>
  );
};

export default Tags;
