import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { loginUser, signUpUser } from "./controllers/userControllers.js";


dotenv.config();
const PORT = process.env.PORT;

const server = express();



server.use(cors());
server.use(json());

// Rotas;
server.post("/", loginUser);
server.post("/sign-up", signUpUser);






server.listen(5000, () => {
  console.log(`Servidor funcionandona na porta ${PORT}`);
});
