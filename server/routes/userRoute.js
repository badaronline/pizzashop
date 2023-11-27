import express from "express";
const router = express.Router();
import User from "../models/userModel.js";

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  {
    try {
      newUser.save();
      res.status(200).json({
        success: true,
        message: "Registered Successfully",
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  }
});

export default router;
