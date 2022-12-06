// import db from '../db.js';

// export const listBooks = (id = {}) => {
//     return db('books')
//         .where(id)
//         .select('*')
// };

// export const createBook = (obj) => {
//     return db('books').insert(obj)
// };

// export const updateBook = (id, obj) => {
//     return db('books').where('id', id).update(obj)
// };

// export const deleteBook = (id) => {
//     return db('books').where('id', id).del()
// }

import db from '../db.js';

export const listBooks = (id={}) => {
    return db('books')
        .where(id)
        .select('*')
};

export const createBooks = (obj) => {
    return db('books').insert(obj)
};

export const updateBook = (id, obj) => {
    return db('books').where('id', id).update(obj)
};

export const deleteBook = (id) => {
    return db('books').where('id', id).del()
};