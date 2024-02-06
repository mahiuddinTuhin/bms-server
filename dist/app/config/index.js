"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
const localEnv = {
    port: process.env.PORT || 5001,
    mongodb_uri: process.env.MONGODB_URI,
    secret: process.env.SECRET,
    access_token_exp: process.env.ACCESS_TOKEN_EXP,
    refresh_secret: process.env.REFRESH_SECRET,
    refresh_token_exp: process.env.REFRESH_EXP,
};
exports.default = localEnv;
