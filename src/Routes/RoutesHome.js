import express from "express";
import { getListProd } from "../controllers/homecontrollers.js";

const router = express.Router();

router.get('/home',getListProd);

export default router;