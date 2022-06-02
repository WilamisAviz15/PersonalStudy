import { MongoConnection } from "./database/mongoConnection";
import express from "express";
import { URLController } from "./controller/URLController";

const app = express();
app.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();
app.post("/shorten", urlController.shorten);
app.post("/:hash", urlController.redirect);
app.listen(3000, () => console.log("Connected on port 3000"));
