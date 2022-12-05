import { IWalletItem } from "../../../shared/interfaces/IWalletItem.interface";
import styles from "./Card.module.scss";

const CardBox = ({ item }: { item: IWalletItem }) => {
  return (
    <article
      className={styles.cardbox}
      style={{ backgroundColor: `${item.color ? item.color : "#8BC34A"}` }}
    >
      <h3>{item.title}</h3>
      <h4>{item.description}</h4>
      <span>{item.balance}</span>
    </article>
  );
};

export default CardBox;
