import { listBooks, createBooks, updateBook, deleteBook } from "../services/services.books.js";

export const list = async (req, res) => {
    try {
        const getAll = await listBooks();
        res.json(getAll);
    } catch (error) {
        res.status(400).json(error.message)
    }
};

export const single = async(req, res) => {
    try {
        const book = await listBooks({id: req.params.id});
        res.json(book);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const created = async(req, res) => {
    try {
        await createBooks(req.body)
        res.status(200).send('Book saved');
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const updated = async(req, res) => {
    try {
        const { body } = req;
        const { id } = req.params;
        await updateBook(id, body);
        res.json(body);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const deleted = async(req, res) => {
    try {
        const { id } = req.params;
        await deleteBook(id);
        res.send(`Book deleted`);
    } catch (error) {
        res.status(400).json(error.message)
    }
}