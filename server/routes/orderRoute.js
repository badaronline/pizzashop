import express from "express";
import { placeOrder, getUserOrder } from "../controllers/orderController.js";

const router = express.Router();

router.post("/placeorder", placeOrder);

router.post("/getuserorder", getUserOrder);

export default router;
