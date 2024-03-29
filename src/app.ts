/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import cors from "cors";
import express from "express";
import globalErrorHandler from "./app/middlewares/error/globalErrorHandler";
import APIv1Routes from "./app/routes";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://booktook.netlify.app"],
    credentials: true,
  }),
);

app.use("/api/v1", APIv1Routes);

app.all("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Server is running!`,
  });
});
app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Unknown endpoint!`,
  });
});

// app.use(successRespond);
app.use(globalErrorHandler);

export default app;
