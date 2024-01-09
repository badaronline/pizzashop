import express from "express";
import { getAllPizzas } from "../controllers/pizzaController.js";

const router = express.Router();

// GET ALL PIZZA
router.get("/getAllPizzas", getAllPizzas);

export default router;
