import classNames from "classnames";
import { TypePlate } from "types/Plate";

import styles from "./TagsPlate.module.scss";

const TagsPlate = ({ category, price, serving, size }: TypePlate) => {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__tipo]: true,
          [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>{size}g</div>
      <div className={styles.tags__qtdpessoas}>
        {serving} 2 pessoas{serving === 1 ? "" : "s"}
      </div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
};

export default TagsPlate;
