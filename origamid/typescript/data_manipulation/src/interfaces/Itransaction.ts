export type TransactionStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Estornada"
  | "Aguardando pagamento";

export type PaymentMethod = "Cartão de Crédito" | "Boleto";

export type ITemporaryData = {
  Nome: string;
  Data: string;
  Email: string;
  ID: number;
  Status: TransactionStatus;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: boolean;
  ["Forma de Pagamento"]: PaymentMethod;
};

export interface ITransaction {
  id: number;
  name: string;
  email: string;
  newClient: boolean;
  value: string;
  status: TransactionStatus;
  payment: PaymentMethod;
  date: string;
}
