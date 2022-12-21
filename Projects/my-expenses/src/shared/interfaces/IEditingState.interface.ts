import { IWalletItem } from "./IWalletItem.interface";

export interface IEditingState {
  isIdEditing: IWalletItem | undefined;
  setIsIdEditing: React.Dispatch<React.SetStateAction<IWalletItem | undefined>>;
}
