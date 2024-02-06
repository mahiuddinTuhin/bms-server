/* eslint-disable @typescript-eslint/no-explicit-any */

import jwt from "jsonwebtoken";
import localEnv from "../../config";
const generateAccessToken = (data: any) => {
  const expiresIn = localEnv.access_token_exp;
  const secret = localEnv.secret;
  const token = jwt.sign({ data }, secret, { expiresIn });

  return token;
};

export default generateAccessToken;
