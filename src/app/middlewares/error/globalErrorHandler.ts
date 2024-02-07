/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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

export default globalErrorHandler;
