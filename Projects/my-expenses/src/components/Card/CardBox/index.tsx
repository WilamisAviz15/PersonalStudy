import { IWalletItem } from "../../../shared/interfaces/IWalletItem.interface";
import styles from "./CardBox.module.scss";
import { FaPlus, FaEdit } from "react-icons/fa";

const CardBox = ({
  item,
  onOpenWalletDialog,
}: {
  item: IWalletItem;
  onOpenWalletDialog: (value: boolean, currentWallet?: IWalletItem) => void;
}) => {
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
      <div className={styles.cardbox__content}>
        <h3>{item.title}</h3>
        <h4>{item.description}</h4>
        <span>R$ {Number(item.balance).toFixed(2).replace(".", ",")}</span>
      </div>

      <div className={styles.cardbox__actions}>
        <a>
          <FaEdit onClick={() => onOpenWalletDialog(true, item)} />
        </a>
        <a>
          <FaPlus />
        </a>
      </div>
    </article>
  );
};

export default CardBox;
