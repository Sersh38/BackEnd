import { urlencoded } from 'express';
import express from 'express';
import mainRouter from'../routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', mainRouter);

app.get('/', (req, res) => {
    res.json({
        msg: 'ok'
    })
})

app.use((err, req, res, next) => {

    const status = err.status || 500;
    const message = err.message || 500;

    res.status(status).json({ message });
})

export default app; 