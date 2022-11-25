import styles from "./CardBalance.module.scss";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const CardBalance = () => {
  return (
    <section className={styles.card}>
      <div className={styles.card__content}>
        <span>
          <FaRegMoneyBillAlt />
        </span>
        <span>Available Balance</span>
        <h3>R$ 3.000,00</h3>
      </div>
    </section>
  );
};

export default CardBalance;
