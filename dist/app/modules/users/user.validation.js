"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginValidationSchema = exports.userValidationSchema = void 0;
const zod_1 = require("zod");
exports.userValidationSchema = (0, zod_1.object)({
    data: (0, zod_1.object)({
        name: zod_1.z.string().min(3).optional(),
        email: zod_1.z.string(),
        wishList: zod_1.z.array(zod_1.z.string().optional()).optional(),
        password: zod_1.z.string(),
        profileImage: zod_1.z.string().optional(),
        phone: zod_1.z.string().optional(),
        verified: zod_1.z.string().optional(),
    }),
});
exports.userLoginValidationSchema = (0, zod_1.object)({
    data: (0, zod_1.object)({
        email: zod_1.z.string(),
        password: zod_1.z.string(),
    }),
});
