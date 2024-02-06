import { RequestHandler } from "express";
import generateAccessToken from "../../utils/auth/generateAccessToken";
import generateRefreshToken from "../../utils/auth/generateRefreshToken";
import catchAsync from "../../utils/errors/catchAsync";
import userService from "./user.service";

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const newUser = await userService.createUser(req.body);

  res.status(200).json({
    success: true,
    message: "User created successfully",
    data: newUser,
  });
});

const login: RequestHandler = catchAsync(async (req, res) => {
  const result = await userService.login(req.body);

  let accessToken;
  let refreshToken;
  if (result?._id && result?.email) {
    accessToken = generateAccessToken(result);
    refreshToken = generateRefreshToken(result);
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

export default userController;
