import { Router } from 'express';
import { books } from '../db/models/Book.js';

const routes = Router();

routes.get('/', (req, resp) => {
    return resp.status(200).json({message: "Main page"});
})

routes.get('/books', async (req, resp) => {
    const allBooks = await books.find().exec();
    return resp.status(200).json(allBooks);
})
routes.get('/authors', (req, resp) => {
    
    return resp.status(200).json({message: "Author page"});
})

export default routes;