import mongoose from "mongoose";

const pizzaSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    variants: [],
    prices: [],
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const pizzaModel = mongoose.model("pizza", pizzaSchema);
export default pizzaModel;
