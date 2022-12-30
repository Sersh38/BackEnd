import Server from './services/server.js';

const PORT = 8080;

Server.listen(PORT, () => {
    console.log('Todo bien');
});