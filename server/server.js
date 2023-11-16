// server.js
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/config.js";
import "colors";

dotenv.config();

// Connection to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Route
app.get("/", (req, res) => {
  res.send("<h1>Hello From Node Server</h1>");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server Running on ${
      process.env.NODE_ENV || "development"
    } mode on port no ${port}`.bgMagenta.white
  );
});
