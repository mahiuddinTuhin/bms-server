"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    console.log({ err });
    return res.status(err.status || 500).json({
        success: false,
        name: err.name,
        message: err.message,
    });
};
exports.default = globalErrorHandler;
