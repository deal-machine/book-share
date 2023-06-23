import { books } from "../db/models/Book.js";

export class BookRepository {
  constructor() {
    this.bookModel = books;
  }

  async findAll() {
    return this.bookModel.find().exec();
  }

  async findOneById(id) {
    return this.bookModel.findById(id).exec();
  }
}
