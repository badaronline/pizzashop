import express from "express";
import { v4 as uuidv4 } from "uuid";
import stripe from "stripe"; // Use import for the stripe module
import orderModel from "../models/orderModel.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const stripeSecretKey = process.env.STRIPE_SECRETKEY;

const stripeInstance = stripe(stripeSecretKey);

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripeInstance.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripeInstance.charges.create(
      {
        amount: subTotal * 100,
        currency: "EUR",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment.status === "succeeded") {
      const newOrder = new orderModel({
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: subTotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          zipCode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      await newOrder.save();
      res.send("Payment done successfully");
    } else {
      res.send("Payment failed");
    }
  } catch (error) {
    console.error("Error placing order", error);
    res.status(400).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
});

router.post("/getuserorder", async (req, res) => {
  const { userId } = req.body;
  try {
    const orders = await orderModel.find({ userId }).sort({ _id: -1 }); //sorting for more recent order
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
});

export default router;
