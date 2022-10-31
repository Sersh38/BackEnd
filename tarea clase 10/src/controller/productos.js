const createError = require('http-errors')
const { v4: uuidv4 } = require('uuid');

class ProductsApi {
    constructor () {
        this.productos = [
            {id: uuidv4(), title: 'Kong', price: 5000},
        ];
    }

    // exists(id) {
    //     const indice = this.productos.findIndex(aProduct => aProduct.id == id)

    // return indice >= 0;
    // }



getAll() {
    return this.productos;
};

// getById(id) {
//     const exist = this.exists(id);

//     if(!exist) throw createError(404, 'Product not found');

//     const indice = this.productos.findIndex(aProduct => aProduct.id == id)

//     return this.productos[indice];
// }

save(data) {

    const nuevoProducto = {
        title: data.title,
        price: data.price,
        id: uuidv4(),
    }

    this.productos.push(nuevoProducto);
    
}

// findByIdAndUpdate(id, datanueva) {
//     const exist = this.exists(id);

//     if(!exist) throw createError(404, 'El producto no existe');


//     const indice = this.productos.findIndex(aProduct =>  aProduct.id == id)

//     const oldProduct =  this.productos[indice];

//     const nuevoProducto = {
//         id: oldProduct.id,
//         title: datanueva.title,
//         price: datanueva.price,
//     }

//     this.productos.splice(indice, 1, nuevoProducto);

//     return nuevoProducto;
// }

// findByIdAndDelete(id) {
//     const exist = this.exists(id);
//     if(!exist) return;

//     const indice = this.productos.findIndex(aProduct =>  aProduct.id == id)

//     this.productos.splice(indice, 1);
// }

// random() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(createError(404, 'El producto no existe'))
//         }, 500)
//     })
// }

}

const productosController = new ProductsApi();

module.exports = productosController
