import express from "express";
import { Book } from "../models/book.model.js";

const router = express.Router();

//Route for save new Book
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.author ||
      !request.body.title ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        Message: "Please send all required filed : Title,author,PublishYear",
      });
    }
    const newBook = {
      author: request.body.author,
      title: request.body.title,
      publishYear: request.body.publishYear,
    };
    const result = await Book.create(newBook);
    return response.status(201).send(result);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//get all the Book from db
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      books: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//get one the Book from db using ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for update a book

router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Please send all required filed : Title,author,PublishYear",
      });
    }
    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).send({ Message: "Book not Found" });
    }
    return response.status(200).send({ Message: "Book updated Successfully" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//Route for delete book using ID

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).send({ Message: "Book not found" });
    }
    return response.status(200).send({ Message: "Book deleted Successfully" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ Message: message.error });
  }
});

export default router;
