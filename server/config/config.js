// config/config.js
import mongoose from "mongoose";
import "colors";

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = await mongoose.connect(url, {
      //   useUnifiedTopology: true,
      //   useNewUrlParser: true,
      //   useCreateIndex: true,
    });
    console.log(
      `MongoDB Database connected! ${conn.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.bgRed.white);
  }
};

export default connectDB;
