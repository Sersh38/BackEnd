import { initMongoDB } from './services/database';
import server from './services/server';

const init = async () => {
	await initMongoDB();
	const port = 8080;

	server.listen(port, ()=> console.log("Todo bien"))
}

init();