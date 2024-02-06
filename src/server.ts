import mongoose from "mongoose";

import app from "./app";
import localEnv from "./app/config";

const dbUrl = localEnv.mongodb_uri;

const connection = mongoose.connect(dbUrl);

app.listen(localEnv.port, () => {
  if (connection) {
    console.log(
      `\x1b[47m\x1b[1m\x1b[37mServer is running well on port: ${localEnv.port}\x1b[0m`,
    );
  } else {
    console.error("MongoDB connection error:");
    process.exit(1);
  }
});

export default app;
