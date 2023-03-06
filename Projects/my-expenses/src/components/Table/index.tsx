import { useEffect } from "react";

import { IWalletItem } from "shared/interfaces/IWalletItem.interface";
import styles from "./Table.module.scss";
import TBody from "./TBody";
import THead from "./Thead";

const Table = ({ tbodyData }: { tbodyData: IWalletItem[] }) => {
  useEffect(() => {
    verifyTransactions(tbodyData);
  }, [tbodyData]);

  const theadData = [
    "",
    "Wallet",
    "Current Balance",
    "Description",
    "Amount",
    "Date",
  ];

  const verifyTransactions = (tbodyData: IWalletItem[]): boolean => {
    let existsTransaction = false;
    tbodyData.forEach((data) =>
      data.transactions.length > 0
        ? (existsTransaction = existsTransaction || true)
        : (existsTransaction = existsTransaction || false)
    );
    return existsTransaction;
  };

  return verifyTransactions(tbodyData) ? (
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
