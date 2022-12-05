export interface IPropsDialog {
  title: string;
  onCloseDialog: (value: boolean) => void;
  children: React.ReactNode;
}
