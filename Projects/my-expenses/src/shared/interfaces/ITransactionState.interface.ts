export interface ITransactionState {
  isValueAddBalance: string | undefined;
  setIsValueAddBalance: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}
