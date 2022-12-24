import { productsModel } from "../models/products";
import { productsGlo } from "../globales";

class Products {
  constructor() {}

  async getById(id: string) {
    try {
      return await productsModel.findById(id);
    } catch (error) {
      console.log(error);
    }
  }
  async saveProduct(data: productsGlo) {
    try {
      const newProduct: productsGlo = {
        name: data.name,
        price: data.price,
        stock: data.stock,
      };
      await productsModel.create(newProduct);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteProduct(id: string) {
    try {
      await productsModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
  async upProduct(id: string, data: productsGlo) {
    const { name, price, stock } = data;
    try {
      await productsModel.findByIdAndUpdate(
        id,
        { name, price, stock },
        { new: true }
      );
    } catch (error) {
      console.log(error);
    }
  }
}

const newProduct = new Products();

export default newProduct;

