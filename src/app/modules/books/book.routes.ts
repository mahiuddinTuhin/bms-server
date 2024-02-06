/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import valiDateSchema from "../../middlewares/validation/validateSchema";
import bookController from "./book.controllers";
import bookValidation from "./book.validation";

const router = Router();

router.post(
  "/createBook",
  valiDateSchema(bookValidation),
  bookController.createBook,
);

router.get("/allbook", bookController.getAllBook);
router.get("/bookById", bookController.getBookById);
router.delete("/deleteById", bookController.deleteBookById);
router.delete("/deleteAll", bookController.deleteaLLBook);
router.post("/updateById", bookController.updateBookById);

const bookRoutes = router;

export default bookRoutes;
