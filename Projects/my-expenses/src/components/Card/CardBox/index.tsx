import { IWalletItem } from "../../../shared/interfaces/IWalletItem.interface";
import styles from "./Card.module.scss";

const CardBox = ({ item }: { item: IWalletItem }) => {
  const returnColor = (nameColor: string): string => {
    switch (nameColor) {
      case "color-1":
        return "#2ecc71";
      case "color-2":
        return "#3498db";
      case "color-3":
        return "#f1c40f";
      case "color-4":
        return "#e74c3c";
      default:
        return "#2ecc71";
    }
  };

  return (
    <article
      className={styles.cardbox}
      style={{
        backgroundColor: `${returnColor(item.color)}`,
      }}
    >
      <h3>{item.title}</h3>
      <h4>{item.description}</h4>
      <span>R$ {Number(item.balance).toFixed(2).replace(".", ",")}</span>
    </article>
  );
};

export default CardBox;
