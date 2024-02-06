"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
const successRespond = (message, data) => {
    return (res) => {
        res.status(200).json({
            success: true,
            message,
            data,
        });
    };
};
exports.default = successRespond;
