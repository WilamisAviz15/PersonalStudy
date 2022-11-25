import styles from "./Card.module.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <span className={styles.card__header__title}>A simple card</span>
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__content__items}>
          <span>A simple card</span>
          <span>A simple card</span>
        </div>
      </div>
      <div className={styles.card__action}>
        <div className={styles.card__action__items}>
          <button>
            <FaEdit />
          </button>
          <button>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
