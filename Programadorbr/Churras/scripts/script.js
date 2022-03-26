// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  let qtdAdt = inputAdultos.value;
  let qtdChd = inputCriancas.value;
  let qtdDur = inputDuracao.value;

  let qtdTtlCarne = carnePP(qtdDur) * qtdAdt + (carnePP(qtdDur) / 2) * qtdChd;
  let qtdTtlCerveja = cervejaPP(qtdDur) * qtdAdt;
  let qtdTtlBebidas =
    bebidasPP(qtdDur) * qtdAdt + (bebidasPP(qtdDur) / 2) * qtdChd;
  resultado.innerHTML = `<p>${qtdTtlCarne / 1000} Kg de carne</p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTtlCerveja / 355
  )} Latas de cerveja</p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTtlBebidas / 2000
  )} Garrafas de 2L de bebidas
  </p>`;
}

function carnePP(duracao) {
  return duracao >= 6 ? 650 : 400;
}

function cervejaPP(duracao) {
  return duracao >= 6 ? 2000 : 1200;
}
function bebidasPP(duracao) {
  return duracao >= 6 ? 1500 : 1000;
}
