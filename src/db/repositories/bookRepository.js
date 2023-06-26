import { books, comments } from "../models/index.js";

export class BookRepository {
  constructor() {
    this.bookModel = books;
    this.commentModel = comments;
  }

  async findAll() {
    return this.bookModel.find({ hidden: false }).populate("comments").exec();
  }

  async findOneById(id) {
    return this.bookModel.findById(id).populate("comments").exec();
  }

  async create({ title, author, hidden, body, date }) {
    return this.bookModel.create({
      title,
      author,
      hidden,
      body,
      date,
    });
  }

  async createCommentByBookId(bookId, comment) {
    const book = await this.bookModel.findById(bookId).exec();

    const commentDoc = await this.commentModel.create({
      body: comment,
      book: book._id,
      date: new Date(),
    });
    book.comments.push(commentDoc._id);

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
