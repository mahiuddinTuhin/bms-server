/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
import AppError from "../../utils/errors/AppError";

const valiDateSchema = (schema: ZodObject<any, any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({ data: req.body });

      next();
    } catch (error) {
      next(new AppError(error, 400));
    }
  };
};

export default valiDateSchema;
