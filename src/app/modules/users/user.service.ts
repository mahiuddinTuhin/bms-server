import { TUser } from "./user.interface";
import User from "./user.model";

const createUser = async (payload: TUser) => {
  const newUser = await User.create(payload);
  return newUser;
};

const login = async (payload: Partial<TUser>) => {
  const result = await User.findOne(payload).select({
    email: 1,
    phone: 1,
  });

  return result;
};

const userService = { createUser, login };

export default userService;
