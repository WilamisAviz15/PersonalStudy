import { Router } from "express";
import { usersController } from "./controllers/usersController";

const routes = Router();
const usersControllers = new usersController();

routes.get("/users", usersControllers.listarUsuario);
routes.post("/users", usersControllers.criarUsuario);

export { routes };
