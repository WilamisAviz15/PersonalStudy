import TagsPlate from "components/TagsPlate";
import { TypePlate } from "types/Plate";

import styles from "./Item.module.scss";

function Item(props: TypePlate) {
  const { title, description, photo } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPlate {...props} />
      </div>
    </div>
  );
}

export default Item;
