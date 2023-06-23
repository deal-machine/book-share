import { Router } from "express";
import { BookFactory } from "../factories/bookFactory.js";

const bookRouters = Router();
const bookController = BookFactory.register();

bookRouters.get("/", async (req, resp) => bookController.getAll(req, resp));
bookRouters.get("/:id", async (req, resp) => bookController.getOne(req, resp));

export default bookRouters;
