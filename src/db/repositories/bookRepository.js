import { books } from "../models/Book.js";

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

  async create({ title, author, hidden, body, date }) {
    return this.bookModel.create({
      title,
      author,
      hidden,
      body,
      date,
      favs,
    });
  }

  async createCommentByBookId(bookId, comment) {
    const book = await this.bookModel.findById(bookId).exec();
    book.comments.push({ body: comment, date: new Date() });
    await book.save();
  }

  async turnHidden(bookId) {
    const book = await this.bookModel.findById(bookId).exec();
    book.hidden = !book.hidden;
    await book.save();
  }

  async addFavs(bookId) {
    const book = await this.bookModel.findById(bookId).exec();
    book.favs = Number(book.favs) + 1;
    await book.save();
  }
}
