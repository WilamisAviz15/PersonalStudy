import { ICountPaymentMethod, IDashboard } from "./interfaces/IDashboard";
import { ITransaction } from "./interfaces/Itransaction";

export function convertMoney(money: string): number {
  if (money === "-") {
    return 0.0;
  }

  return Number(money.replace(".", "").replace(",", "."));
}

export function calculateValuesDashboard(
  data: ITransaction[] | null
): IDashboard {
  if (data === null) {
    return {
      total: 0,
      countPaymentMethod: { bolet: 0, creditCard: 0 },
      countTransactionStatus: { estorned: 0, paid: 0, refused: 0, waiting: 0 },
    };
  }

  let total = 0;
  let countCreditCardValue: ICountPaymentMethod;
  let countBoletValue = 0;

  total = data?.reduce((prev, curr) => {
    return (prev += convertMoney(curr.value));
  }, 0) as number;

  // countCreditCardValue = data.reduce((prev, curr) => {
  //   return (prev += curr.payment === "Cartão de Crédito" ? 1 : 0);
  // }, {});

  // console.log(countCreditCardValue);

  return { total };
}
