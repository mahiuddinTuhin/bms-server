"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    console.log({ err });
    if (err.name === "MongooseError") {
        return res.status(err.status || 500).json({
            success: false,
            name: err.name,
            message: err.message,
            details: err,
        });
    }
    return res.status(err.status || 500).json({
        success: false,
        name: err.name,
        message: err.message,
    });
};
exports.default = globalErrorHandler;
