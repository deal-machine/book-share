export class BookController {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  getAll = async (_request, response) => {
    try {
      const books = await this.bookRepository.findAll();
      return response.status(200).json({ books });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  };

  getOne = async (request, response) => {
    try {
      const { id } = request.params;
      const book = await this.bookRepository.findOneById(id);
      return response.status(200).json({ book });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  };

  create = async (request, response) => {
    try {
      const {
        title,
        author,
        body,
        date = new Date(),
        hidden = false,
      } = request.body;
      const bookCreated = await this.bookRepository.create({
        title,
        author,
        body,
        date,
        hidden,
      });
      return response
        .status(201)
        .json({ message: `Success on create bookId ${bookCreated._id}` });
    } catch (error) {
      return response.status(500).json({ message: "Internal server error" });
    }
  };

  addComment = async (request, response) => {
    try {
      const { comment } = request.body;
      const { id: bookId } = request.params;

      await this.bookRepository.createCommentByBookId(bookId, comment);
      return response.status(201).json({ message: "Success on comment" });
    } catch (error) {
      console.error(error.message);
      return response.status(500).json({ message: "Internal server error" });
    }
  };

  changeVisibility = async (request, response) => {
    try {
      const { id: bookId } = request.params;
      await this.bookRepository.turnHidden(bookId);
      return response
        .status(200)
        .json({ message: "Success on change visibility" });
    } catch (error) {
      console.error(error.message);
      return response.status(500).json({ message: "Internal server error" });
    }
  };

  addFavorite = async (request, response) => {
    try {
      const { id: bookId } = request.params;
      await this.bookRepository.addFavs(bookId);
      return response.status(200).json({ message: "Success on add favorite" });
    } catch (error) {
      console.error(error.message);
      return response.status(500).json({ message: "Internal server error" });
    }
  };
}
