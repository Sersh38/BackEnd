import fs from 'fs';
import { normalize, schema, denormalize } from 'normalizr';
import { faker } from '@faker-js/faker';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mensajes = path.join(__dirname, '../data/messages.json');
const normalizedmessage = path.join(__dirname, '../data/normalizedmessage.json');
const denormalizedmessage = path.join(__dirname, '../data/denormalizedmessage.json');

faker.locale = 'es';

export const products = () => {
    const respuesta = [];

    for (let i = 0; i < 5; i++) {
        respuesta.push({
            nombre: faker.name.name(),
            precio: faker.commerce.price(),
            img: faker.image.abstract(2500, 1800),
        })
    }
    return respuesta;
};

export const readMessages = () => {

    const data = fs.readFileSync(messages, 'utf-8');
    return JSON.parse(data)

};

export const normalizr = () => {

    const data = readMessages();

    const user = new schema.Entity('authors', {}, { idAttribute: 'id' });
    const msg = new schema.Entity('messages', { author: user });

    const messageSchema = new schema.Array({
        author: user,
        text: [msg]
    })

    const normalizeddata = normalize(data, messageSchema);

    fs.writeFileSync(normalizedmessage, JSON.stringify(normalizeddata, null, '\t'))

    return normalizeddata

};

export const denormalizr = () => {

    const author = new schema.Entity('authors', {});
    const text = new schema.Entity('text', { author });
    const finalSchema = new schema.Array(text)


    const data = JSON.parse(fs.readFileSync(normalizedmessage));
    const denormalizeddata = denormalize(data.result, finalSchema, data.entities);

    fs.writeFileSync(denormalizedmessage, JSON.stringify(denormalizeddata, null, '\t'));

    return denormalizeddata;
};