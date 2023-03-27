export type TTransactionStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Estornada"
  | "Aguardando pagamento";

export enum EnumTransactionStatus {
  PAID = "Paga",
  REFUSED = "Recusada pela operadora de cartão",
  ESTORNED = "Estornada",
  WAITING = "Aguardando pagamento",
}

export enum EnumPaymentMethod {
  CREDIT_CARD = "Cartão de Crédito",
  BOLET = "Boleto",
}

export type TPaymentMethod = "Cartão de Crédito" | "Boleto";

export type TTemporaryData = {
  Nome: string;
  Data: string;
  Email: string;
  ID: number;
  Status: TTransactionStatus;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: boolean;
  ["Forma de Pagamento"]: TPaymentMethod;
};

export interface ITransaction {
  id: number;
  name: string;
  email: string;
  newClient: boolean;
  value: string;
  status: TTransactionStatus;
  payment: TPaymentMethod;
  date: string;
}
