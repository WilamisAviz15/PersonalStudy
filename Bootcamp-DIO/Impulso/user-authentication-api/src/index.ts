import express from "express";

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas

// Inicialização do servidor
app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000!");
});
