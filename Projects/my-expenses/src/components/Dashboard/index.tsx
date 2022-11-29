import styles from "./Dashboard.module.scss";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Card from "../Card";

const Dashboard = () => {
  return (
    <Card>
      <article className={styles.dashboard}>
        <div className={styles.dashboard__header}>
          <h2>Balance</h2>
          <div className={styles.dashboard__header__conversion}>
            <button>R$</button>
            <button>US$</button>
          </div>
        </div>
        <div>
          <span className={styles.dashboard__balance}>R$ 3.000,000</span>
        </div>
        <div className={styles.dashboard__gain}>
          <a>
            <FaArrowUp className={styles.dashboard__gain__up} />
            <span className={styles.dashboard__gain__value}> + R$ 0,02</span>
          </a>
          <a>
            <FaArrowDown className={styles.dashboard__gain__down} />
            <span className={styles.dashboard__gain__value}> - R$ 0,00</span>
          </a>
        </div>
      </article>
    </Card>
  );
};

export default Dashboard;
