"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
class AppError extends Error {
    constructor(errorDetails, status) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.errorDetails =
            errorDetails || "Something went wrong. Please try again.";
        this.status = status || 500;
    }
}
exports.default = AppError;
