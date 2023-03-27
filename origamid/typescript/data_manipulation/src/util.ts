import {
  EnumBiggestSalesDay,
  IDashboard,
  IDayOfWeek,
  TDayOfWeek,
} from "./interfaces/IDashboard";
import {
  EnumPaymentMethod,
  EnumTransactionStatus,
  ITransaction,
} from "./interfaces/Itransaction";

function convertDate(date: string): string {
  let newDate = date.split(" ")[0].split("/");

  return new Date(newDate.reverse().join("-"))
    .toLocaleString("pt-br", {
      weekday: "long",
    })
    .split("-")[0];
}

function convertMoney(money: string): number {
  if (money === "-") {
    return 0.0;
  }

  return Number(money.replace(".", "").replace(",", "."));
}

export function initDashboard(): IDashboard {
  return {
    total: 0,
    countPaymentMethod: { bolet: 0, creditCard: 0 },
    countTransactionStatus: { estorned: 0, paid: 0, refused: 0, waiting: 0 },
  };
}

function initDaysOfWeek(): IDayOfWeek {
  let daysOfWeek: IDayOfWeek = {};
  Object.values(EnumBiggestSalesDay).forEach((value) => {
    daysOfWeek[value] = 0;
  });

  return daysOfWeek;
}

export default function calculateValuesDashboard(
  data: ITransaction[] | null
): IDashboard {
  if (data === null) {
    return initDashboard();
  }
  let daysOfWeek: IDayOfWeek = initDaysOfWeek();
  let total = data.reduce((prev, current) => {
    return (prev += convertMoney(current.value));
  }, 0);

  const { bolet, creditCard } = data.reduce(
    (prev, current) => {
      switch (current.payment) {
        case EnumPaymentMethod.CREDIT_CARD:
          prev.creditCard += 1;
          break;
        case EnumPaymentMethod.BOLET:
          prev.bolet += 1;
          break;
      }

      return { creditCard: prev.creditCard, bolet: prev.bolet };
    },
    { creditCard: 0, bolet: 0 }
  );

  const { paid, estorned, refused, waiting } = data.reduce(
    (prev, current) => {
      switch (current.status) {
        case EnumTransactionStatus.PAID:
          prev.paid += 1;
          break;
        case EnumTransactionStatus.REFUSED:
          prev.refused += 1;
          break;
        case EnumTransactionStatus.ESTORNED:
          prev.estorned += 1;
          break;
        case EnumTransactionStatus.WAITING:
          prev.waiting += 1;
          break;
      }

      return {
        paid: prev.paid,
        refused: prev.refused,
        waiting: prev.waiting,
        estorned: prev.estorned,
      };
    },
    { paid: 0, refused: 0, waiting: 0, estorned: 0 }
  );

  data.forEach((item) => {
    const date = convertDate(item.date);
    if (date === "terça") {
      daysOfWeek["terca"] += 1;
    } else {
      daysOfWeek[date] += 1;
    }
  });

  function biggestValue(): TDayOfWeek {
    return Object.keys(daysOfWeek).reduce((a, b) =>
      daysOfWeek[a] > daysOfWeek[b] ? a : b
    ) as TDayOfWeek;
  }

  return {
    total,
    countPaymentMethod: {
      bolet,
      creditCard,
    },
    countTransactionStatus: {
      estorned,
      paid,
      refused,
      waiting,
      biggestSalesDay: biggestValue(),
    },
  };
}
