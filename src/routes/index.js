import { Router } from "express";
import bookRouters from "./bookRoutes.js";

const routes = Router();

routes.use("/books", bookRouters);

export default routes;
