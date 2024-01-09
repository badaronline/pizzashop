import express from "express";
import { placeOrder } from "../controllers/orderController.js";
import { getUserOrder } from "../controllers/userController.js";

const router = express.Router();

router.post("/placeorder", placeOrder);

router.post("/getuserorder/:userId", getUserOrder);

export default router;
