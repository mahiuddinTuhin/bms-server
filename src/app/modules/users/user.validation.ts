import { object, z } from "zod";

export const userValidationSchema = object({
  data: object({
    name: z.string().min(3).optional(),
    email: z.string(),
    wishList: z.array(z.string().optional()).optional(),
    password: z.string(),
    profileImage: z.string().optional(),
    phone: z.string().optional(),
    verified: z.string().optional(),
  }),
});

export const userLoginValidationSchema = object({
  data: object({
    email: z.string(),
    password: z.string(),
  }),
});
