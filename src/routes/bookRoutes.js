import { Router } from "express";
import { BookFactory } from "../factories/bookFactory.js";

const bookRouters = Router();
const bookController = BookFactory.register();

bookRouters.get("/", async (req, resp) => bookController.getAll(req, resp));
bookRouters.get("/:id", async (req, resp) => bookController.getOne(req, resp));
bookRouters.post("/", async (req, resp) => bookController.create(req, resp));
bookRouters.patch("/:id/comment", async (req, resp) =>
  bookController.addComment(req, resp)
);
bookRouters.patch("/:id/changeVisibility", async (req, resp) =>
  bookController.changeVisibility(req, resp)
);
bookRouters.patch("/:id/favorite", async (req, resp) =>
  bookController.addFavorite(req, resp)
);

export default bookRouters;
