import { Router, Request, Response, NextFunction } from "express";
import newProduct from "../controller/products";
import { productsModel } from "../models/products";


const productRouter = Router()

productRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
       const products = await productsModel.find()
       res.json({
        products
       })
    } catch (error) {
        next(error)
    }
})
productRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id
        const dataJson = await newProduct.getById(id)
        res.json({
            dataJson
        })
    } catch (error) {
        next(error)
    }
})
productRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req
		 {
            await newProduct.saveProduct(body)
            res.json({
                msg: 'Product was added'
            })
        }
    } catch (error) {
        next(error)
    }
})
productRouter.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id
        const { body } = req
       {
            await newProduct.upProduct(id, body)
            res.json({
                msg: `Product was modified`
            })
        }
    } catch (error) {
        next(error)
    }
})
productRouter.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id: string = req.params.id
        await newProduct.deleteProduct(id)
        res.json({
            msg: `Product was deleted`
        })
    } catch (error) {
        next(error)
    }
})

export default productRouter