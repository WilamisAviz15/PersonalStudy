import styles from "./Balance.module.scss";
import { FaSearch } from "react-icons/fa";

import Card from "../Card";
import Button from "../Button";
import CardBox from "../Card/CardBox";
import Select from "../Select";

const Balance = () => {
  return (
    <Card>
      <article className={styles.dashboard}>
        <div className={styles.dashboard__header}>
          <div className={styles.dashboard__header__title}>
            <h2>Your Personal Wallets</h2>
            <Button />
          </div>
          <div
            style={{ display: "inline-flex", justifyContent: "space-between" }}
          >
            <Select />
            <span className={styles.dashboard__header__search}>
              <FaSearch />
              <input type="text" placeholder="Search your wallet" />
            </span>
          </div>
        </div>
        <div className={styles.dashboard__content}>
          <CardBox backgroundColor="#2196F3" />
          <CardBox backgroundColor="#009688" />
          <CardBox backgroundColor="#00BCD4" />
          <CardBox backgroundColor="#8BC34A" />
          <CardBox backgroundColor="#009688" />
          <CardBox backgroundColor="#00BCD4" />
          <CardBox backgroundColor="#8BC34A" />
        </div>
      </article>
    </Card>
  );
};

export default Balance;
