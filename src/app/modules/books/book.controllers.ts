import { RequestHandler } from "express";
import catchAsync from "../../utils/errors/catchAsync";
import successRespond from "../../utils/response/successResponse";
import bookServices from "./book.services";

const createBook: RequestHandler = catchAsync(async (req, res) => {
  const newBook = await bookServices.createBook(req.body);
  successRespond("successfully created new book.", newBook)(res);
});

const getAllBook: RequestHandler = catchAsync(async (req, res) => {
  const allBook = await bookServices.getAllBook(req.query || {});

  successRespond("successfully retrieved all books", allBook)(res);
});

const getBookById: RequestHandler = catchAsync(async (req, res) => {
  const book = await bookServices.getBookById(req.body);
  successRespond("successfully retrieved book by id.", book)(res);
});

const updateBookById: RequestHandler = catchAsync(async (req, res) => {
  const result = await bookServices.updateBookById(req.body);
  successRespond("successfully update book by id.", result)(res);
});

const deleteBookById: RequestHandler = catchAsync(async (req, res) => {
  await bookServices.deleteBookById(req.body);
  successRespond("successfully delete book by id.", null)(res);
});

const deleteaLLBook: RequestHandler = catchAsync(async (req, res) => {
  await bookServices.deleteAllBook(req.body || {});
  successRespond("successfully delete books.", null)(res);
});
const bookController = {
  createBook,
  getAllBook,
  getBookById,
  deleteBookById,
  deleteaLLBook,
  updateBookById,
};

export default bookController;
