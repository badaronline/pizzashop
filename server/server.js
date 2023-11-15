import express from "express";
import morgan from "morgan";
import colors from "colors";

const app = express();
const PORT = 8080;

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//route
app.get("/", (req, res) => {
  res.send("<h1> Hello From Node Server </h1>");
});

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
