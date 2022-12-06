import express from 'express';
import morgan from 'morgan';
const puerto = 8082;

const app = express();

import books from '../SQL/routes/routes.books.js';

app.use(morgan('dev'));
app.use(express.json());
app.use('/books', books);

app.listen(puerto, ()=>{
    console.log(`Todo bien`);
})