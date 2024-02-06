"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = require("express");
const validateSchema_1 = __importDefault(require("../../middlewares/validation/validateSchema"));
const book_controllers_1 = __importDefault(require("./book.controllers"));
const book_validation_1 = __importDefault(require("./book.validation"));
const router = (0, express_1.Router)();
router.post("/createBook", (0, validateSchema_1.default)(book_validation_1.default), book_controllers_1.default.createBook);
router.get("/allbook", book_controllers_1.default.getAllBook);
router.get("/bookById", book_controllers_1.default.getBookById);
router.delete("/deleteById", book_controllers_1.default.deleteBookById);
router.delete("/deleteAll", book_controllers_1.default.deleteaLLBook);
router.post("/updateById", book_controllers_1.default.updateBookById);
const bookRoutes = router;
exports.default = bookRoutes;
