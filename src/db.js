import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config()

const cliente = new MongoClient("mongodb://localhost:27017");
let db;

try {
  await cliente.connect();
  db = cliente.db("api-prosupps")
} catch (error) {
  console.log(error)
}

export default db;