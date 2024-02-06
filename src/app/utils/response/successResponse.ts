/* eslint-disable @typescript-eslint/no-explicit-any */

import { Response } from "express";

const successRespond = (message: string, data: any) => {
  return (res: Response) => {
    res.status(200).json({
      success: true,
      message,
      data,
    });
  };
};

export default successRespond;
