import { useContext } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

import styles from "./CardBox.module.scss";
import WalletContext from "store/wallet-context";
import { IWalletItem } from "shared/interfaces/IWalletItem.interface";
import { getCardColor } from "shared/util/util";
import { deleteWallet } from "./CardBox.service";

const CardBox = ({
  item,
  onOpenWalletDialog,
}: {
  item: IWalletItem;
  onOpenWalletDialog: (value: boolean, currentWallet?: IWalletItem) => void;
}) => {
  const walletsContext = useContext(WalletContext);

  const handleDeleteWallet = (id: string) => {
    deleteWallet(walletsContext, id);
  };

  const handleAddBalanceOnWallet = (id: string) => {
    walletsContext.transaction.setIsValueAddBalance(id);
    walletsContext.dialog.setOpenWalletDialog(true);
  };

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
          <FaTrash onClick={() => handleDeleteWallet!(item.id)} />
        </a>
        <a>
          <FaPlus onClick={() => handleAddBalanceOnWallet!(item.id)} />
        </a>
      </div>
    </article>
  );
};

export default CardBox;
