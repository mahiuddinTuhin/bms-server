import { object, z } from "zod";

const bookValidation = object({
  data: object({
    id: z.string().optional(),
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    releasedOn: z.string(),
    author: z.string(),
    ISBN: z.string(),
    genre: z.string(),
    publisher: z.string(),
    series: z.string().optional(),
    language: z.string(),
    format: z.enum(["hardcover", "paperback", "e-book"]),
    coverImage: z.string().url().optional(),
    discount: z.number().optional(), // in percentage
    promotion: z.string().optional(), // Promotion details
    tags: z.string().optional(),
  }),
});

export default bookValidation;
