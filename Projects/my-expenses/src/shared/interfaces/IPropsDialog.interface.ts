export interface IPropsDialog {
  title: string;
  onCloseDialog: (value: boolean) => void;
  saveNewWallet: (wallet: any) => void;
  children?: React.ReactNode;
}
