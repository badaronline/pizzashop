import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/config.js";
import pizzaModel from "./models/pizzaModel.js";
import pizzas from "../client/src/pizza-data.js";
import "colors";

//config dot env and mongodb conn file
dotenv.config();
connectDB();

const importData = async () => {
  try {
    // Connect to the database
    // await connectDB();

    // Insert the data into the database
    await pizzaModel.insertMany(pizzas);

    console.log("Data imported successfully!");
    process.exit(); // Exit the script
  } catch (error) {
    console.error(`Error importing data: ${error.message}`);
    process.exit(1); // Exit with an error
  }
};

// Run the importData function
importData();
