const { Router } = require('express');
const usRuta = require('./usuario');

const ruta = Router();

ruta.use((req, res, next) => {
	console.log('EJECUTO MIDDLEWARE RUTA PRINCIPAL')
	next();
})

ruta.use('/usuario', usRuta);


module.exports = ruta;