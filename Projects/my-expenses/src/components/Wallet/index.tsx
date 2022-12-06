import styles from "./Wallet.module.scss";

import Card from "../Card";
import Button from "../Button";
import CardBox from "../Card/CardBox";
import { IWalletItem } from "../../shared/interfaces/IWalletItem.interface";
import CardHeader from "../Card/CardHeader";

interface IPropsWallet {
  data: IWalletItem[];
  onOpenWalletDialog: (value: boolean) => void;
}

const Wallet = ({ data, onOpenWalletDialog }: IPropsWallet) => {
  return (
    <Card>
      <article className={styles.dashboard}>
        <div className={styles.dashboard__header}>
          <div className={styles.dashboard__header__title}>
            <h2>Your Personal Wallets</h2>
            <Button OnClick={onOpenWalletDialog} />
          </div>
          <CardHeader />
        </div>
        <div className={styles.dashboard__content}>
          {data.length > 0 ? (
            data.map((item) => <CardBox item={item} />)
          ) : (
            <h2>There are no wallets created.</h2>
          )}
        </div>
      </article>
    </Card>
  );
};

export default Wallet;