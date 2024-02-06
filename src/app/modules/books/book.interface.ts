/* eslint-disable @typescript-eslint/no-explicit-any */
import { Date, ObjectId } from "mongoose";

export type TBook = {
  _id: ObjectId;
  id?: string;
  name: string;
  price: number;
  quantity: number;
  releasedOn: Date;
  author: string;
  ISBN: string;
  genre: string;
  publisher: string;
  series?: {
    name: string;
    order: number;
  } | null;
  language: string | any;

  format: "hardcover" | "paperback" | "e-book";
  coverImage?: string;
  discount?: number; // in percentage
  promotion?: string; // Promotion details
  availability?: "in stock" | "out of stock";
  tags?: string | any;

  sells?: [
    {
      buyer: ObjectId;
      seller: ObjectId;
      date: Date;
      quantity: number;
      buyerPhone: string;
    },
  ];
};

export type TQuery = {
  author: string[];
  genre: string[];
  publisher: string[];
  language: string[];
  searchKey: string;
  priceRange: number[];
  priceSort: 1 | -1; // 0 for asc and 1 for dsc
  seriesSort: 1 | -1; // 0 for asc and 1 for dsc
  releasedRange: Date[] | null[] | any;
  ISBN: string | null;
  format: string;
  discount: string; // 0 for asc and 1 for dsc
  [key: string]: string[] | number | number[] | Date[] | null[] | string | null;
};
