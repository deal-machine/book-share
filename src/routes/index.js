import { Router } from 'express';

const routes = Router();

routes.get('/', (req, resp) => {
    return resp.status(200).json({message: "Main page"});
})

routes.get('/books', (req, resp) => {
    
    return resp.status(200).json({message: "Book page"});
})
routes.get('/authors', (req, resp) => {
    
    return resp.status(200).json({message: "Author page"});
})

export default routes;