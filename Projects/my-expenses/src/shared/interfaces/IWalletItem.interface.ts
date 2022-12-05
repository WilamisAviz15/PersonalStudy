import { ITransactionItem } from "./ITransactionItem.interface";

export interface IWalletItem {
  id: string;
  transactions: ITransactionItem[];
  title: string;
  description: string;
  balance: string;
  color: string;
}
