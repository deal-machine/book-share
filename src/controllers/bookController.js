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
}
