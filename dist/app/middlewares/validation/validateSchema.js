"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../../utils/errors/AppError"));
const valiDateSchema = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync({ data: req.body });
            next();
        }
        catch (error) {
            next(new AppError_1.default(error, 400));
        }
    };
};
exports.default = valiDateSchema;
