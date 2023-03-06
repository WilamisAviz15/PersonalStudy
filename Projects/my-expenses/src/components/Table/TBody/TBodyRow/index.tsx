import React, { useEffect } from "react";

import { IWalletItem } from "shared/interfaces/IWalletItem.interface";
import { getCardColor } from "shared/util/util";
import styles from "./TBodyRow.module.scss";
import TBodyRowItem from "./TBodyRowItem";

const handleTBodyRow = (data: IWalletItem) => {
  return (
    <>
      {data.transactions.map((item) => (
        <tr key={item.id}>
          <td
            className={styles.dot}
            style={{ backgroundColor: `${getCardColor(data.color)}` }}
          ></td>
          <TBodyRowItem key={item.id} item={item} />
        </tr>
      ))}
    </>
  );
};

const TableRow = ({ data }: { data: IWalletItem }) => {
  useEffect(() => {
    handleTBodyRow(data);
  }, [data]);

  return data.transactions && handleTBodyRow(data);
};

export default TableRow;
