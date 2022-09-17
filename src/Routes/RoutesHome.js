import express from "express";
import { getListProd, postProductBuying } from "../controllers/homecontrollers.js";
import { midauth } from "../middlewares/authMid.js";


const router = express.Router();

router.get('/home',getListProd);
router.use(midauth);
router.post('/home', postProductBuying);


export default router;