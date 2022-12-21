export interface ITransactionState {
  isValueAddBalance: number | undefined;
  setIsValueAddBalance: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
}
