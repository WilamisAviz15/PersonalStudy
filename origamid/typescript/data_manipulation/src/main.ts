import { IDashboard } from "./interfaces/IDashboard";
import httpGet from "./main.service";
import calculateValuesDashboard, { initDashboard } from "./util";

let dashboard: IDashboard = initDashboard();
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
console.log(dashboard);

document.getElementById(
  "total"
)!.innerText = `Total: R$ ${dashboard.total.toFixed(2)}`;
