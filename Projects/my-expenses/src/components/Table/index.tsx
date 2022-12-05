import { IWalletItem } from "../../shared/interfaces/IWalletItem.interface";
import styles from "./Table.module.scss";
import TBody from "./TBody";
import THead from "./Thead";

const Table = ({ tbodyData }: { tbodyData: IWalletItem[] }) => {
  const theadData = [
    "",
    "Wallet",
    "Current Balance",
    "Description",
    "Amount",
    "Date",
  ];

  return (
    <table className={styles.table}>
      <THead theadData={theadData} />
      <TBody tBodyData={tbodyData} />
    </table>
  );
};

export default Table;
