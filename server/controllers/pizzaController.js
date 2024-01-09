import pizzaModel from "../models/pizzaModel.js";

export const getAllPizzas = async (req, res) => {
  try {
    const pizzas = await pizzaModel.find();
    pizzas.length > 0 ? res.send(pizzas) : res.send("No pizzas found.");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.stack });
  }
};
