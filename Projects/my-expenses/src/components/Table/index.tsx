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

  return tbodyData.length > 0 ? (
    <table className={styles.table}>
      <THead theadData={theadData} />
      <TBody tBodyData={tbodyData} />
    </table>
  ) : (
    <h2 style={{ textAlign: "center" }}>
      There are no transactions performed.
    </h2>
  );
};

export default Table;
