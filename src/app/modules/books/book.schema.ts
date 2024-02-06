import { Schema } from "mongoose";
import { TBook } from "./book.interface";

const bookSchema = new Schema<TBook>({
  id: String,
  name: String,
  price: Number,
  quantity: Number,
  releasedOn: Date,
  author: String,
  ISBN: String,
  genre: String,
  publisher: String,
  series: String,
  language: String,
  format: {
    type: String,
    enum: ["hardcover", "paperback", "e-book"],
  },
  coverImage: String,
  discount: Number, // in percentage
  promotion: String, // Promotion details
  tags: String,
  sells: [
    {
      buyer: String,
      seller: Schema.Types.ObjectId,
      date: Date,
      quantity: Number,
      buyerPhone: String,
    },
  ],
});

export default bookSchema;
