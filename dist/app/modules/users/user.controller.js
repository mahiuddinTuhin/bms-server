"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateAccessToken_1 = __importDefault(require("../../utils/auth/generateAccessToken"));
const generateRefreshToken_1 = __importDefault(require("../../utils/auth/generateRefreshToken"));
const catchAsync_1 = __importDefault(require("../../utils/errors/catchAsync"));
const user_service_1 = __importDefault(require("./user.service"));
const createUser = (0, catchAsync_1.default)(async (req, res) => {
    const newUser = await user_service_1.default.createUser(req.body);
    res.status(200).json({
        success: true,
        message: "User created successfully",
        data: newUser,
    });
});
const login = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.default.login(req.body);
    let accessToken;
    let refreshToken;
    if (result?._id && result?.email) {
        accessToken = (0, generateAccessToken_1.default)(result);
        refreshToken = (0, generateRefreshToken_1.default)(result);
    }
    // if (!result) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "user not found",
    //   });
    // }
    res
        .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
    })
        .status(200)
        .json({
        success: true,
        message: "User login successfully",
        data: result,
        token: accessToken,
    });
});
const userController = { createUser, login };
exports.default = userController;
