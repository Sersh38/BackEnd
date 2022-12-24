import { Router, Request, Response, NextFunction } from "express";
import cart from "../controller/cart";

const cartRouter = Router();

cartRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const idCart = await cart.newCart();
      res.json({
        msg: `ID: ${idCart}`,
      });
    } catch (error) {
      next(error);
    }
  }
);
cartRouter.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const idParams: string = req.params.id;
      await cart.deleteCart(idParams);
      res.json({
        msg: `ID ${idParams} deleted`,
      });
    } catch (error) {
      next(error);
    }
  }
);
cartRouter.get("/:id/productos", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const idParams = req.params.id;
      const dataJson = await cart.productsCart(idParams);
      res.json({
        dataJson,
      });
    } catch (error) {
      next(error);
    }
  }
);
cartRouter.post("/:id/productos", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const idParams = req.params.id;
      const { id } = req.body;
      await cart.addProduct(idParams, id);
      res.json({
        msg: `The product was added succesfully`,
      });
    } catch (error) {
      next(error);
    }
  }
);
cartRouter.delete("/:id/productos/:id_prod", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const idCart = req.params.id;
      const idProduct = req.params.id_prod;
      await cart.deleteProd(idCart, idProduct);
      res.json({
        msg: `Product deleted from cart`,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default cartRouter;