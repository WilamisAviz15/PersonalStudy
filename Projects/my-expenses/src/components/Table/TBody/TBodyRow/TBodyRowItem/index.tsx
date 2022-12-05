import { ITransactionItem } from "../../../../../shared/interfaces/ITransactionItem.interface";
import styles from "./TBodyRowItem.module.scss";

const isPositiveOrNegativeValue = (value: string): string => {
  return Number(value.replace("R$", "").replace(",", ".")) > 0
    ? "#109010"
    : "#e61919";
};

const TBodyRowItem = ({ item }: { item: ITransactionItem }) => {
  return (
    <>
      <td key={item.name} className={styles.item}>
        {item.name}
      </td>
      <td key={item.currentBalance} className={styles.item}>
        {item.currentBalance}
      </td>
      <td key={item.description} className={styles.item}>
        {item.description}
      </td>
      <td
        key={item.amount}
        className={styles.item}
        style={{ color: `${isPositiveOrNegativeValue(item.amount)}` }}
      >
        {item.amount}
      </td>
      <td key={item.date} className={styles.item}>
        {item.date}
      </td>
    </>
  );
};

export default TBodyRowItem;
