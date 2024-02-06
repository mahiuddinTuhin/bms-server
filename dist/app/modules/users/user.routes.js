"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateSchema_1 = __importDefault(require("../../middlewares/validation/validateSchema"));
const user_controller_1 = __importDefault(require("./user.controller"));
const user_validation_1 = require("./user.validation");
const router = (0, express_1.Router)();
router.post("/create-user", (0, validateSchema_1.default)(user_validation_1.userLoginValidationSchema), user_controller_1.default.createUser);
router.post("/login", (0, validateSchema_1.default)(user_validation_1.userLoginValidationSchema), user_controller_1.default.login);
const userRoutes = router;
exports.default = userRoutes;
