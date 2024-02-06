"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
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
            seller: mongoose_1.Schema.Types.ObjectId,
            date: Date,
            quantity: Number,
            buyerPhone: String,
        },
    ],
});
exports.default = bookSchema;
