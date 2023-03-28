import { IDashboard, TCountTransactionStatus } from "./interfaces/IDashboard";
import httpGet from "./main.service";
import calculateValuesDashboard, {
  convertNumberToMoney,
  initDashboard,
} from "./util";

const $ = (id: string): HTMLElement => document.getElementById(id)!;
let dashboard: IDashboard = initDashboard();
const data = await httpGet("https://api.origamid.dev/json/transacoes.json");
const table = $("table");

data?.forEach((item) => {
  table.innerHTML += `
    <tr> 
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.value === "-" ? "0,00" : item.value}</td>
      <td>${item.payment}</td>
      <td>${item.status}</td>
  </tr>`;
});

dashboard = calculateValuesDashboard(data);
console.log(dashboard);

$("total").innerText = `Total: R$ ${convertNumberToMoney(dashboard.total)}`;
$(
  "credit-card-amount"
).innerText = `Cartão de credito: ${dashboard.countPaymentMethod.creditCard}`;
$("bolet-amount").innerText = `Boleto: ${dashboard.countPaymentMethod.bolet}`;

$("metrics-transaction-status").innerHTML = `
  ${Object.keys(dashboard.countTransactionStatus)
    .map((key: string) => {
      let transaction: string = "";
      switch (key) {
        case "paid":
          transaction = "Paga";
          break;
        case "refused":
          transaction = "Recusada pela operadora de cartão";
          break;
        case "estorned":
          transaction = "Estornada";
          break;
        case "waiting":
          transaction = "Aguardando pagamento";
          break;
        case "biggestSalesDay":
          transaction = "Dia com mais venda";
      }
      return `<span>${transaction}: ${
        dashboard.countTransactionStatus[key as TCountTransactionStatus]
      }</span>`;
    })
    .join("<br>")}
`;
