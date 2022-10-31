const express = require('express');
const  productosController  = require('../controller/productos');

const router = express.Router();

router.post('/', (req, res) => {
    const body = req.body;

    const nuevoProducto = {
        title: body.title,
        price: body.price,
        id: body.id
    }

    productosController.save(nuevoProducto);

    res.redirect('/')
})


// router.get('/', (req, res) => {
//     res.json({
//         msg: ProductsController.getAll()
//     })
// })

// router.post('/', async (req, res, next) => {
//     try {

//         const dato = req.body
//         let response = await ProductsController.save(dato)

//         res.json({ msg: `Producto guardado ID: ${response}` });

//     } catch (err) {
//         next(err);
//     }
// });

// router.get('/:id', (req, res) => { 
//         const id = req.params.id;

//         const producto = ProductsController.getById(id)
//         res.json({
//             msg: producto
//         })
// })


// router.post('/', async (req, res, next)=>{
//     try{
//         const prodCargado = req.body
//         const producto = await ProductsController.save(prodCargado)
//         res.redirect('/')
//     }catch(err){
//         next(err);
//     } 
// });

// router.post('/', async (req, res, next) => {
// 	const body = req.body

// 	try{
// 		const data = await ProductsController.save(req.body);
// 		res.json({
// 			msg: data
// 		})
// 	} catch (err) {
// 		next(err);
// 	}

// 	res.redirect('/')
// })


// const funcionAsync = async (req, res) => {
// 	const id = req.params.id;
// 	const { body }  = req

// 	const data = await ProductsController.findByIdAndUpdate(id, body);
// 	res.json({
// 		msg: data
// 	})
// }

// router.put('/:id', asyncHandler(funcionAsync));

// router.delete('/:id', (req, res) => {
// 	const id = req.params.id;

// 	res.json({
// 		msg: ProductsController.findByIdAndDelete(id)
// 	})
// })



module.exports = router