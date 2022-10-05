const fs = require('fs');
const path = require('path');
const nombrearchivo="producto.json"

const obtenerproducto = async ()=>{
    const dato = await fs.promises.readFile(nombrearchivo, 'utf-8')
    return JSON.parse(dato)
}

const guardarArchivo = async (productos) =>{
    const data = JSON.stringify(productos, null, '\t')//el \t es para acomodar el json
    await fs.promises.writeFile(nombrearchivo,data)
}
const getAll = async ()=>{
const producto = await obtenerproducto();
console.log(producto)
};
const getbyid=async(idbuscado)=>{
    const productos = await obtenerproducto()

    const indice = productos.findIndex((unProducto) => unProducto.id === idbuscado)
    
    if(indice < 0){
        throw new Error('el producto no existe')
    }
    console.log(productos[indice])
    return productos[indice]
   
    }
    const save=async(data)=>{
        const productos= await obtenerproducto()
        let id = 1;
        if(productos.length){
            id = productos[productos.length -1].id + 1
        }
        const nuevoProducto = {
            title: data.title,
            price: data.price,
            id: id
        }
        productos.push(nuevoProducto);
        await guardarArchivo(productos)
    }
const deleatAll = async ()=>{
    await guardarArchivo([])
}

const deleatbyid=async(idbuscado)=>{
    const prod = await obtenerproducto();
    const indice = prod.findIndex((unProducto) => unProducto.id === idbuscado)
    if(indice < 0){
        return;
    }
    prod.splice(indice,4);
    await guardarArchivo(prod);
};

const main = async () => {
	console.log('1) Llamado a los productos getAll ')
	const get = await getAll();
	console.log(get);

    console.log('2) Llamado al producto por id ')
	const byid = await getbyid(1);
	console.log(byid);

    // console.log('3) Guardo un producto ')
	// const nuevoProducto = {title: 'cartuchera', price: 400};
	// await save(nuevoProducto);
}
main()
// deleatAll()
deleatbyid()