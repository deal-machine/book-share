import { BookController } from "../controllers/bookController.js"
import { BookRepository } from "../repositories/bookRepository.js";

export class BookFactory  {
    static register = () => {
        const bookRepository = new BookRepository();
        const bookController = new BookController(bookRepository);
        return bookController;
    }
}