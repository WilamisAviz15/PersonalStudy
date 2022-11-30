import styles from "./Transaction.module.scss";

import Card from "../Card";
import Select from "../Select";

const Transaction = () => {
  return (
    <Card>
      <>
        <article className={styles.transaction}>
          <div className={styles.transaction__header}>
            <h3>Transaction</h3>
          </div>
          <div className={styles.transaction__header__dropdown}>
            <Select />
          </div>
        </article>
      </>
    </Card>
  );
};

export default Transaction;
