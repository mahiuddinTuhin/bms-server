/* eslint-disable @typescript-eslint/no-explicit-any */

import jwt from "jsonwebtoken";
import localEnv from "../../config";
const generateRefreshToken = (data: any) => {
  const expiresIn = localEnv.refresh_token_exp;
  const secret = localEnv.refresh_secret;
  const token = jwt.sign({ data }, secret, { expiresIn });

  return token;
};

export default generateRefreshToken;
