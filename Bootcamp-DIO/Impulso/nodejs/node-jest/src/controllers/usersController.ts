import { Request, Response } from "express";
import { database } from "../database";

export class usersController {
  criarUsuario(req: Request, res: Response): Response {
    const { name } = req.body;
    if (name.length < 1)
      return res
        .status(403)
        .json({ message: "Não é possível criar usuário sem nome" });
    database.push(name);
    return res.status(201).json({ message: `Usuário ${name} criado` });
  }

  listarUsuario(req: Request, res: Response): Response {
    return res.status(200).json(database);
  }
}
