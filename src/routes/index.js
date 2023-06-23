import { Router } from 'express';
import bookRouters from './bookRoutes.js';

const routes = Router();

routes.use('/books', bookRouters);

routes.get('/', (req, resp) => {
    return resp.status(200).json({message: "Main page"});
})

routes.get('/authors', (req, resp) => {    
    return resp.status(200).json({message: "Author page"});
})

export default routes;