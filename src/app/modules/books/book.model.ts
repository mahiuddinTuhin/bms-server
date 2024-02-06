import { model } from "mongoose";
import { TBook } from "./book.interface";
import bookSchema from "./book.schema";

const Book = model<TBook>("Book", bookSchema);

export default Book;
