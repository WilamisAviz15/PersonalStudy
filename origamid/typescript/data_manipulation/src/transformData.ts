import { ITemporaryData, ITransaction } from "./interfaces/Itransaction";

export default function transformData(data: ITemporaryData[]): ITransaction[] {
  return data.map(
    (item) =>
      ({
        id: item.ID,
        email: item.Email,
        date: item.Data,
        name: item.Nome,
        newClient: item["Cliente Novo"],
        payment: item["Forma de Pagamento"],
        status: item.Status,
        value: item["Valor (R$)"],
      } as ITransaction)
  );
}
