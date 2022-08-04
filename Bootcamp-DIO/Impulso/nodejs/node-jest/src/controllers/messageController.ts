import { Request, Response } from "express";

class MessageController {
  async handle(req: Request, res: Response) {
    return res.status(200).json({ message: "Welcome" });
  }
}

export { MessageController };
