/* eslint-disable @typescript-eslint/no-explicit-any */
class AppError extends Error {
  status: number;
  errorDetails: any;
  constructor(errorDetails: any, status: number) {
    super();

    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;

    this.errorDetails =
      errorDetails || "Something went wrong. Please try again.";
    this.status = status || 500;
  }
}

export default AppError;
