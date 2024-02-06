import { Router } from "express";
import valiDateSchema from "../../middlewares/validation/validateSchema";
import userController from "./user.controller";
import { userLoginValidationSchema } from "./user.validation";
const router = Router();

router.post(
  "/create-user",
  valiDateSchema(userLoginValidationSchema),
  userController.createUser,
);

router.post(
  "/login",
  valiDateSchema(userLoginValidationSchema),
  userController.login,
);

const userRoutes = router;

export default userRoutes;
