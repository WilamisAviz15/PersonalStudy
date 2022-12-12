import { IWalletItem } from "../../../shared/interfaces/IWalletItem.interface";
import styles from "./CardBox.module.scss";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const CardBox = ({
  item,
  onOpenWalletDialog,
  onDeleteWallet,
  onAddBalanceOnWallet,
}: {
  item: IWalletItem;
  onOpenWalletDialog: (value: boolean, currentWallet?: IWalletItem) => void;
  onDeleteWallet?: (id: number) => void;
  onAddBalanceOnWallet?: (id: number) => void;
}) => {
  const returnColor = (nameColor: string): string => {
    switch (nameColor) {
      case "color-1":
        return "#05c091";
      case "color-2":
        return "#3498db";
      case "color-3":
        return "#ff8a45";
      case "color-4":
        return "#ff6e76";
      case "color-5":
        return "#8d48e3";
      default:
        return "#05c091";
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
          <FaTrash onClick={() => onDeleteWallet!(+item.id)} />
        </a>
        <a>
          <FaPlus onClick={() => onAddBalanceOnWallet!(+item.id)} />
        </a>
      </div>
    </article>
  );
};

export default CardBox;
