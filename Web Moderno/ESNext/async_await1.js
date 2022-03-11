function esperarPor(tempo = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("exec promise");
      resolve();
    }, tempo);
  });
}

// esperarPor(3000).then(esperarPor).then(esperarPor);

function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function executar() {
  let valor = await retornarValor();
  await esperarPor(1500);
  console.log(`async/await ${valor}...`);
  await esperarPor(1500);
  console.log(`async/await ${valor + 1}...`);
  await esperarPor(1500);
  console.log(`async/await ${valor + 2}...`);
  return valor + 3;
}

executar().then(console.log);
