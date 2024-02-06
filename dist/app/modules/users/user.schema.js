"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: String,
    wishList: [mongoose_1.Schema.ObjectId],
    email: String,
    password: String,
    profileImage: String,
    phone: String,
    verified: String,
});
exports.default = userSchema;
