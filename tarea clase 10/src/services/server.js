const express = require('express');
const path = require('path');
const mainRouter = require('../routes/index');
const productosController = require('../controller/productos');


const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
const viewsPath = path.resolve(__dirname, '../../vistas');
app.set('views', viewsPath);

app.get('/', (req, res) => {
  const productos = productosController.getAll();
  res.render('index', { productos });
});

app.use(express.json());	
app.use(express.urlencoded({ extended: true }));  
app.use('/api', mainRouter);

module.exports = app;


// const app = express()

// app.use(express.static('public'));

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.set('view engine', 'ejs');
// const viewsPath = path.resolve(__dirname, '../../vistas');
// app.set('views', viewsPath);


// app.get('/', (req, res) => {
//     const productos = ProductsController.getAll();
//     res.render('index', {productos});
// })

// // app.use((err, req, res, next) => {
// //     const status = err.status || 500;
// //     const message = err.message || 500;

// //     res.status(status).json({
// //         message
// //     })
// // }),

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.use('/api', mainRouter);

// module.exports = app