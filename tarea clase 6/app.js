const express   = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 8080;

class Contenedor {
    constructor(archivo){

        this.archivo =archivo;       //this.archivo =`./${archivo}.json` (metodo que uso un compañero); 
    }
    async obtenerproducto(){
        const data = await fs.promises.readFile(this.archivo,'utf-8');
        return JSON.parse(data);
    }
    async getAll() {
        const data =  await this.obtenerproducto();
        return data;
    };
}
const productos = new Contenedor('producto.json');//llammos al producto.json ||const productos = new Contenedor('productos')
//----------------------------------------------------------------------------------------------------------------------------
const server = app.listen(PORT, () =>
  console.log('Server Up en puerto', PORT)
);

server.on('error', (err) => {
  console.log('ERROR =>', err);
});
//---------------------------------------------------------------------------------------------------------------------------
app.get('/',(req,res)=>{
    res.json('para ver la lista de productos escriba /productos, para ver un producto random escriba /productoRandom')
});
app.get('/productos',(req,res)=>{
    const allProducts =  productos.getAll().then((unProducto) =>{
        res.json(unProducto);
    })
});
app.get('/productoRandom',(req,res)=>{
    
    const random = (min, max) => {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    const productRandom =  productos.getAll().then((unProducto) =>{
        res.json(unProducto[random(0,unProducto.length-1)]);
    })
});