"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const generateAccessToken = (data) => {
    const expiresIn = config_1.default.access_token_exp;
    const secret = config_1.default.secret;
    const token = jsonwebtoken_1.default.sign({ data }, secret, { expiresIn });
    return token;
};
exports.default = generateAccessToken;
