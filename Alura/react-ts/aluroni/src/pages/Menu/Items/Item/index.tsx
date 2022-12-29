import TagsPlate from "components/TagsPlate";
import { useNavigate } from "react-router-dom";
import { TypePlate } from "types/Plate";

import styles from "./Item.module.scss";

function Item(props: TypePlate) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
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
