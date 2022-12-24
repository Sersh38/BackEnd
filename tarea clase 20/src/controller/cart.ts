import { cartModel } from "../models/cart";
import { productsModel } from "../models/products";
import { cartGlo } from "../globales";

class Cart {
  constructor() {}

  async newCart() {
    try {
      const newCart: cartGlo = {
        timestap: new Date().toLocaleString(),
        productos: [],
      };
      const cart = await cartModel.create(newCart);
      return cart?._id.toString()
    } catch (error) {
      console.log(error);
    }
  }
  async deleteCart(id: string) {
    try {
      await cartModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
  async productsCart(id: string) {
    try {
      const cart = await cartModel.findById(id);
      const products = await cart?.populate("idProd");
      return products?.idProd;
    } catch (error) {
      console.log(error);
    }
  }
  async addProduct(idCart: string, idProduct: string) {
    try {
      const cart = await cartModel.findById(idCart);
      const product = await productsModel.findById(idProduct);
      if (product === null || cart === null) {
        throw new Error("It does not exists");
      } else {
        cart.idProd.push(product._id);
      }
      await cartModel.create(cart);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteProd(idCart: string, idProduct: string) {
    try {
      const cart = await cartModel.findById(idCart);
      if (cart === null) {
        throw new Error("Cart does not exists");
      } else {
        const index = cart.idProd.findIndex(
          (id) => id.toString() === idProduct
        );
        if(index < 0){
          throw new Error('Product does not exists')
        }
        cart.idProd.splice(index, 1);
        await cartModel.create(cart); 
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const cart = new Cart();

export default cart;