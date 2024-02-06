"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../../utils/errors/catchAsync"));
const successResponse_1 = __importDefault(require("../../utils/response/successResponse"));
const book_services_1 = __importDefault(require("./book.services"));
const createBook = (0, catchAsync_1.default)(async (req, res) => {
    const newBook = await book_services_1.default.createBook(req.body);
    (0, successResponse_1.default)("successfully created new book.", newBook)(res);
});
const getAllBook = (0, catchAsync_1.default)(async (req, res) => {
    const allBook = await book_services_1.default.getAllBook(req.query || {});
    (0, successResponse_1.default)("successfully retrieved all books", allBook)(res);
});
const getBookById = (0, catchAsync_1.default)(async (req, res) => {
    const book = await book_services_1.default.getBookById(req.body);
    (0, successResponse_1.default)("successfully retrieved book by id.", book)(res);
});
const updateBookById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await book_services_1.default.updateBookById(req.body);
    (0, successResponse_1.default)("successfully update book by id.", result)(res);
});
const deleteBookById = (0, catchAsync_1.default)(async (req, res) => {
    await book_services_1.default.deleteBookById(req.body);
    (0, successResponse_1.default)("successfully delete book by id.", null)(res);
});
const deleteaLLBook = (0, catchAsync_1.default)(async (req, res) => {
    await book_services_1.default.deleteAllBook(req.body || {});
    (0, successResponse_1.default)("successfully delete books.", null)(res);
});
const bookController = {
    createBook,
    getAllBook,
    getBookById,
    deleteBookById,
    deleteaLLBook,
    updateBookById,
};
exports.default = bookController;
