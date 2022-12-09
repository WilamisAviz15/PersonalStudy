import { IWalletItem } from "../../../../shared/interfaces/IWalletItem.interface";
import styles from "./TBodyRow.module.scss";
import TBodyRowItem from "./TBodyRowItem";

interface IProps {
  id: string;
  items: string[];
  color: string;
}

const TableRow = ({ data }: { data: IWalletItem }) => {
  return (
    data.transactions && (
      <tr>
        <span
          className={styles.dot}
          style={{ backgroundColor: `${data.color}` }}
        ></span>
        {data.transactions.map((item) => (
          <TBodyRowItem item={item} />
        ))}
      </tr>
    )
  );
};

export default TableRow;
