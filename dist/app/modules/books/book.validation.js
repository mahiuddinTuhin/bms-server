"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const bookValidation = (0, zod_1.object)({
    data: (0, zod_1.object)({
        id: zod_1.z.string().optional(),
        name: zod_1.z.string(),
        price: zod_1.z.number(),
        quantity: zod_1.z.number(),
        releasedOn: zod_1.z.string(),
        author: zod_1.z.string(),
        ISBN: zod_1.z.string(),
        genre: zod_1.z.string(),
        publisher: zod_1.z.string(),
        series: zod_1.z.string().optional(),
        language: zod_1.z.string(),
        format: zod_1.z.enum(["hardcover", "paperback", "e-book"]),
        coverImage: zod_1.z.string().url().optional(),
        discount: zod_1.z.number().optional(), // in percentage
        promotion: zod_1.z.string().optional(), // Promotion details
        tags: zod_1.z.string().optional(),
    }),
});
exports.default = bookValidation;
