import mongoose from "mongoose";

export const products: string = "products";

export const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true }, 
  timestamp: { type: String, default: new Date().toLocaleString() },
});

export const productsModel = mongoose.model(
  products,
  productsSchema
);