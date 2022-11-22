import React, { useState } from "react";
import Tags from "../tags";
import styles from "./styles.module.scss";
import pictures from "./pictures.json";

import Cards from "./Cards";

const Gallery = () => {
  const [items, setItems] = useState(pictures);
  const tags = [...new Set(pictures.map((picture) => picture.tag))];

  const picturesFiltereds = (tag) => {
    const newPictures = pictures.filter((picture) => picture.tag === tag);
    setItems(newPictures);
  };

  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags
        tags={tags}
        onFilterPictures={picturesFiltereds}
        setItems={setItems}
      />
      <Cards styles={styles} pictures={items} />
    </section>
  );
};

export default Gallery;
