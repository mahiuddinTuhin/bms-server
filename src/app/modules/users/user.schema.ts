import { Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  name: String,
  wishList: [Schema.ObjectId],
  email: String,
  password: String,
  profileImage: String,
  phone: String,
  verified: String,
});

export default userSchema;
