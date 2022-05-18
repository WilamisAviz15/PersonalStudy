import express from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

//configuração da aplicacao
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuração das rotas
app.use(statusRoute);
app.use(usersRoute);

app.listen(3000, () => console.log("Executando na porta 3000"));
