"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const book_schema_1 = __importDefault(require("./book.schema"));
const Book = (0, mongoose_1.model)("Book", book_schema_1.default);
exports.default = Book;
