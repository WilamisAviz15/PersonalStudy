import styles from "./Wallet.module.scss";

import Card from "../Card";
import Button from "../Button";
import CardBox from "../Card/CardBox";
import CardHeader from "../Card/CardHeader";
import { IPropsWallet } from "../../shared/interfaces/IPropsWallet.interface";

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
            data.map((item) => (
              <CardBox item={item} onOpenWalletDialog={onOpenWalletDialog} />
            ))
          ) : (
            <h2>There are no wallets created.</h2>
          )}
        </div>
      </article>
    </Card>
  );
};

export default Wallet;
