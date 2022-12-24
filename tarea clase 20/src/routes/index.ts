import { Router, Request, Response } from "express";
import cartRouter from './cart';
import productRouter from './products';

const router = Router();

router.use('/cart', cartRouter);
router.use('/productos', productRouter);

export default router;