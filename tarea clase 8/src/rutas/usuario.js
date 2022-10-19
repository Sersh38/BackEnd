const fs = require('fs/promises');
const path = require('path');
const { Router } = require('express');

const file = path.resolve(__dirname, '../../producto.json');
console.log(file)

const ruta = Router()

ruta.use((req, res, next) => {
	console.log('EJECUTO MIDDLEWARE ROUTER USUARIOS')
	next();
})

const public = (req, res, next) => {
	console.log('ESTO SE EJECUTA SOLAMEMTE CON EL GET ALL')
	next();
}

ruta.get('/', public, async (req, res) => {
	const Data = await fs.readFile(file, 'utf-8');
	const usuarios = JSON.parse(Data);
	res.json({
		data: usuarios,
	});
});

ruta.get('/:id', async (req, res) => {
	const id = req.params.id
	const fileData = await fs.readFile(file, 'utf-8');
	const usuarios = JSON.parse(fileData);

	const indice = usuarios.findIndex(unUsuario => unUsuario.id == id);

	if(indice < 0){
		return res.status(404).json({
			msg: "el producto no existe"
		})
	}

	res.json({
		msg: `producto ${id}`,
		data: usuarios[indice]
	});
});

ruta.post('/', async (req, res) => {
	const data = req.body;
	console.log(req.body);

	const {title, price,} = req.body;

	if(!title || !price) {
		return res.status(400).json({
			msg: "Campos invalidos :( "
		})
	}

	const nuevo = {
		title,
		price
	}

	const Data = await fs.readFile(file, 'utf-8');
	const producto = JSON.parse(Data);
	producto.push(nuevo);

	await fs.writeFile(file, JSON.stringify(producto, null, '\t'));

	res.json({
		msg: 'ok',
		data: nuevo
	})
});

ruta.put('/:id', async (req, res) => {
	const id = req.params.id;
	const {title, price} = req.body;

	const Data = await fs.readFile(file, 'utf-8');
	const usuarios = JSON.parse(Data);

	const indice = usuarios.findIndex(unUsuario => unUsuario.id == id);

	if(indice < 0){
		return res.status(404).json({
			msg: "el usuario no existe"
		})
	}

	if(!title || !price) {
		return res.status(400).json({
			msg: "Campos invalidos :( "
		})
	}

	const usuarioActualizado = {
		id: usuarios[indice].id,
		title,
		price
	}

	usuarios.splice(indice, 1, usuarioActualizado);

	await fs.writeFile(file, JSON.stringify(usuarios, null, '\t'));

	//actualizar
	res.json({
		msg: `Modificando objet con id ${id}`,
		data: usuarioActualizado,
	})
});

ruta.delete('/:id', async (req, res) => {
	const id = req.params.id;
	const Data = await fs.readFile(file, 'utf-8');
	const usuarios = JSON.parse(Data);

	const indice = usuarios.findIndex(unUsuario => unUsuario.id == id);

	if(indice < 0){
		return res.json({
			msg: "ok"
		})
	}

	usuarios.splice(indice, 1);
	await fs.writeFile(file, JSON.stringify(usuarios, null, '\t'));

	//borrar
	res.json({
		msg: `Borrando objet con id ${id}`,
	})
})


module.exports = ruta;