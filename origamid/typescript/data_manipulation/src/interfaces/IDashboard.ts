interface ICountTransactionStatus {
  paid: number;
  refused: number;
  waiting: number;
  estorned: number;
  biggestSalesDay?:
    | "segunda"
    | "terca"
    | "quarta"
    | "quinta"
    | "sexta"
    | "sabado"
    | "domingo";
}

export interface ICountPaymentMethod {
  creditCard: number;
  bolet: number;
}

export interface IDashboard {
  total: number;
  countPaymentMethod: ICountPaymentMethod;
  countTransactionStatus: ICountTransactionStatus;
}
