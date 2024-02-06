import { TBook } from "../books/book.interface";

export type TOrder = {
  orderId: string;
  orderDate?: Date;
  quantity: number;
  totalPrice?: number;
  book: Partial<TBook>;
  buyer: {
    phone: string;
    address?: string;
  };
  advanced?: number;
  delivered?: boolean;
};
