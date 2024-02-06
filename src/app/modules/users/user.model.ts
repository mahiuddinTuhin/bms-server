import { model } from "mongoose";
import userSchema from "./user.schema";
import { TUser } from "./user.interface";

const User = model<TUser>("User", userSchema);

export default User;
