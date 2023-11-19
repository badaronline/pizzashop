import express from "express";
const router = express.Router();
import pizzaModel from "../models/pizzaModel.js";

// GET ALL PIZZA
router.get("/getAllPizzas", async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error });
  }
});

export default router;
