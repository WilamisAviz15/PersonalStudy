import { IWalletItem } from "../../../../shared/interfaces/IWalletItem.interface";
import styles from "./TBodyRow.module.scss";

interface IProps {
  id: string;
  items: string[];
  color: string;
}

const isPositiveOrNegativeValue = (value: string): string => {
  return Number(value.replace("R$", "").replace(",", ".")) > 0
    ? "#109010"
    : "#e61919";
};

const TableRow = ({ data }: { data: IWalletItem }) => {
  return (
    <tr>
      <span
        className={styles.dot}
        style={{ backgroundColor: `${data.color}` }}
      ></span>

      {data.transactions.map((item) => {
        let color = isPositiveOrNegativeValue(item.amount);
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
              style={{ color: `${color}` }}
            >
              {item.amount}
            </td>
            <td key={item.date} className={styles.item}>
              {item.date}
            </td>
          </>
        );
      })}
    </tr>
  );
};

export default TableRow;
