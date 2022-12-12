import { IWalletItem } from "../../../shared/interfaces/IWalletItem.interface";
import styles from "./CardBox.module.scss";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { getCardColor } from "../../../shared/util/util";

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
  return (
    <article
      className={styles.cardbox}
      style={{
        backgroundColor: `${getCardColor(item.color)}`,
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
