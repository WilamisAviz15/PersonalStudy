interface ICountTransactionStatus {
  paid: number;
  refused: number;
  waiting: number;
  estorned: number;
  biggestSalesDay?: TDayOfWeek;
}

export type TDayOfWeek =
  | "segunda"
  | "terca"
  | "quarta"
  | "quinta"
  | "sexta"
  | "sabado"
  | "domingo";

export enum EnumBiggestSalesDay {
  MONDAY = "segunda",
  TUESDAY = "terca",
  WEDNESDAY = "quarta",
  THURSDAY = "quinta",
  FRIDAY = "sexta",
  SATURDAY = "sabado",
  SUNDAY = "domingo",
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
