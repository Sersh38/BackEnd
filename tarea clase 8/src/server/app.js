const express = require("express")
const ruta = require('../rutas/index');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	console.log('EJECUTO MIDDLEWARE APP PRINCIPAL')
	next();
})
app.use(express.static('public'));
app.use('/api', ruta);

app.use((err, req, res, next) => {

    console.error(err.stack);
    res.status(500).send({
          msg: 'Se pudrio todo'
      });
  });

app.use(express.static('public'));
module.exports = app;