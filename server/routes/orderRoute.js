import express from "express";
import { v4 as uuidv4 } from "uuid";
import stripe from "stripe"; // Use import for the stripe module

const router = express.Router();
const stripeSecretKey =
  "sk_test_51OJ1SOBYR2toddcKirkTf5OM9t01QzQDQ5pmtgnxAgrKcaaLmDqz9PerwahvVPXa5ATD4GXPS2q337ea2N7IUTr600t2ugz1r7";

const stripeInstance = stripe(stripeSecretKey);

router.post("/placeorder", async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripeInstance.customers.create({
      email: token.email,
      source: token.id,
    });
    console.log(customer.id);
    console.log(customer.email);
    console.log(email);
    console.log(source);
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

    if (payment) {
      res.send("Payment done successfully");
    } else {
      res.send("Payment failed");
    }
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
});

export default router;
