import orderModel from "../models/orderModel.js";

export const getUserOrder = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await orderModel.find({ userId }).sort({ _id: -1 }); //sorting for more recent order
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
};
