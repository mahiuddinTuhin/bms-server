import { configDotenv } from "dotenv";

configDotenv();

const localEnv = {
  port: process.env.PORT || 5001,
  mongodb_uri: process.env.MONGODB_URI,
  secret: process.env.SECRET,
  access_token_exp: process.env.ACCESS_TOKEN_EXP,
  refresh_secret: process.env.REFRESH_SECRET,
  refresh_token_exp: process.env.REFRESH_EXP,
};

export default localEnv;
