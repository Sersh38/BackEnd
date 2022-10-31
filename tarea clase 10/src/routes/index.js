const express = require('express');
const ProductosRouter = require('./productos')
const router = express();


// router.get('/', (req, res) => {
//     res.json({
//         msg: 'ok router'
//     })
// })

router.use('/productos', ProductosRouter);

module.exports = router