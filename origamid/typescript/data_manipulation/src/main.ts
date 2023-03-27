import { IDashboard } from "./interfaces/IDashboard";
import httpGet from "./main.service";
import { calculateValuesDashboard, convertMoney } from "./util";

let dashboard: IDashboard = {
  total: 0,
  countPaymentMethod: { bolet: 0, creditCard: 0 },
  countTransactionStatus: { estorned: 0, paid: 0, refused: 0, waiting: 0 },
};
const data = await httpGet("https://api.origamid.dev/json/transacoes.json");
const table = document.getElementById("table")!;

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

document.getElementById(
  "total"
)!.innerText = `Total: R$ ${dashboard.total.toFixed(2)}`;
