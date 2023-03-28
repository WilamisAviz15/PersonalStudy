interface ICountTransactionStatus {
  paid: number;
  refused: number;
  waiting: number;
  estorned: number;
  biggestSalesDay?: TDayOfWeek;
}

export type TCountTransactionStatus =
  | "paid"
  | "refused"
  | "waiting"
  | "estorned"
  | "biggestSalesDay";

export type TDayOfWeek =
  | "segunda"
  | "terca"
  | "quarta"
  | "quinta"
  | "sexta"
  | "sabado"
  | "domingo";

export enum EnumBiggestSalesDay {
  SUNDAY = "domingo",
  MONDAY = "segunda",
  TUESDAY = "terca",
  WEDNESDAY = "quarta",
  THURSDAY = "quinta",
  FRIDAY = "sexta",
  SATURDAY = "sabado",
}

export interface IDayOfWeek {
  [day: string]: number;
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
