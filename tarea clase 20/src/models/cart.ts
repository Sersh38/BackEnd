import mongoose from "mongoose";
import { products } from "./products";

export const cartCollect: string = "cart";

const cartsSchema = new mongoose.Schema({
  timestamp: { type: String, default: new Date().toLocaleString() },
  idProd: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: products,
      default: [],
    },
  ],
});

export const cartModel = mongoose.model(cartCollect, cartsSchema);