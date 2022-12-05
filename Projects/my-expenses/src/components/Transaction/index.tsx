import styles from "./Transaction.module.scss";

import Card from "../Card";
import Table from "../Table";
import { IWalletItem } from "../../shared/interfaces/IWalletItem.interface";
import CardHeader from "../Card/CardHeader";

const Transaction = ({ data }: { data: IWalletItem[] }) => {
  return (
    <Card>
      <>
        <article className={styles.transaction}>
          <div className={styles.transaction__header}>
            <h3>Transaction</h3>
          </div>
          <CardHeader />
          <div className={styles.transaction__header__table}>
            <Table tbodyData={data} />
          </div>
        </article>
      </>
    </Card>
  );
};

export default Transaction;
