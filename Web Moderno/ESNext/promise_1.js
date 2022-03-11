let p = new Promise((cumprirPromessa) => {
  cumprirPromessa(3);
});

p.then((valor) => {
  console.log(valor);
});
