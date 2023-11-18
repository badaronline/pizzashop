import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/config.js";
import pizza from "./models/pizzaModel.js";
import pizzas from "./data/pizza-data.js";
import "colors";

//config dot env and mongodb conn file
dotenv.config();
connectDB();

const importData = async () => {
  try {
    await pizza.deleteMany();
    const sampleData = pizzas.map((pizza) => {
      return { ...pizza };
    });
    await pizza.insertMany(sampleData);
    console.log("Data imported successfully!".bgGreen.white);
    process.exit(); // Exit the script
  } catch (error) {
    console.error(`Error importing data: ${error.message}`);
    process.exit(1); // Exit with an error
  }
};

const dataDestroy = async () => {
  try {
    await pizza.deleteMany();
    console.log("Data destroyed successfully!".bgRed.white);
    process.exit(); // Exit the script
  } catch (error) {
    console.error(`Error destroying data: ${error.message}`);
    process.exit(1); // Exit with an error
  }
};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  // Run the importData function
  importData();
}
