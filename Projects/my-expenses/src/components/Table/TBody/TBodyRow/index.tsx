import { useEffect } from "react";
import { IWalletItem } from "../../../../shared/interfaces/IWalletItem.interface";
import { getCardColor } from "../../../../shared/util/util";
import styles from "./TBodyRow.module.scss";
import TBodyRowItem from "./TBodyRowItem";

const handleTBodyRow = (data: IWalletItem) => {
  return (
    <>
      {data.transactions.map((item) => (
        <tr>
          <span
            className={styles.dot}
            style={{ backgroundColor: `${getCardColor(data.color)}` }}
          ></span>
          <TBodyRowItem item={item} />
        </tr>
      ))}
    </>
  );
};

const TableRow = ({ data }: { data: IWalletItem }) => {
  useEffect(() => {
    handleTBodyRow(data);
  }, []);

  return data.transactions && handleTBodyRow(data);
};

export default TableRow;
