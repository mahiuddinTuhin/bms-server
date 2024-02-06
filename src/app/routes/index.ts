import express from "express";
import bookRoutes from "../modules/books/book.routes";
import userRoutes from "../modules/users/user.routes";

const router = express.Router();

export const routesPath = [
  {
    endpoint: "/books",
    route: bookRoutes,
  },
  {
    endpoint: "/user",
    route: userRoutes,
  },
];

routesPath.map(item => router.use(item.endpoint, item.route));

const APIv1Routes = router;

export default APIv1Routes;
