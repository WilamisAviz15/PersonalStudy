import styles from "./Balance.module.scss";

import Card from "../Card";
import Button from "../Button";
import CardBox from "../Card/CardBox";
import { IWalletItem } from "../../shared/interfaces/IWalletItem.interface";
import CardHeader from "../Card/CardHeader";

const Balance = ({ data }: { data: IWalletItem[] }) => {
  return (
    <Card>
      <article className={styles.dashboard}>
        <div className={styles.dashboard__header}>
          <div className={styles.dashboard__header__title}>
            <h2>Your Personal Wallets</h2>
            <Button />
          </div>
          <CardHeader />
        </div>
        <div className={styles.dashboard__content}>
          {data.map((item) => (
            <CardBox item={item} />
          ))}
        </div>
      </article>
    </Card>
  );
};

export default Balance;
