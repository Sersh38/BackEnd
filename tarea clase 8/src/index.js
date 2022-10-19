const server = require('./server/app')

const puerto = 8080;

server.listen(puerto, () => {
	console.log(`Servidor Listo escuchando en el puerto ${puerto}`)
})