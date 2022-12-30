import{ Router } from 'express';
import {products, normalizr, denormalizr} from '../controllers/controller.js'

const router = Router();

router.get('/productos-test', (req, res) => {

    let productos = products()

    res.json({
        msg: productos
    })
});

router.get('/normalized', (req, res) => {

    let normalizedmessage = normalizr();

    res.json({
        msg: normalizedmessage
    })
});

router.get('/denormalized', (req, res) => {

    let denormalizedmessage = denormalizr();

    res.json({
        msg: denormalizedmessage
    })
});


export default router;
