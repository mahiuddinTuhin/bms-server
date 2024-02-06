"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("./user.model"));
const createUser = async (payload) => {
    const newUser = await user_model_1.default.create(payload);
    return newUser;
};
const login = async (payload) => {
    const result = await user_model_1.default.findOne(payload).select({
        email: 1,
        phone: 1,
    });
    return result;
};
const userService = { createUser, login };
exports.default = userService;
