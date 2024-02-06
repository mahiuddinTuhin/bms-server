import { ObjectId } from "mongoose";

export type TUser = {
  name?: string;
  wishList?: ObjectId[] | null;
  email: string;
  password: string;
  profileImage?: string;
  phone?: string;
  verified?: string;
};
