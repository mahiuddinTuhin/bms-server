/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from "mongoose";
import { TBook, TQuery } from "./book.interface";
import Book from "./book.model";

const createBook = async (payload: TBook) => {
  const result = await Book.create(payload);
  return result;
};

const deleteBookById = async (payload: { id: string }) => {
  const result = await Book.findByIdAndDelete(new Types.ObjectId(payload?.id));
  return result;
};

const deleteAllBook = async (
  payload: { ids: string[] } = { ids: [] } || null,
) => {
  if (payload?.ids) {
    const objectIds =
      payload?.ids && payload?.ids?.map((id: string) => new Types.ObjectId(id));

    const result = await Book.deleteMany({ _id: { $in: objectIds } });
    return result;
  } else {
    const result = await Book.deleteMany();
    return result;
  }
};

const getAllBook = async (payload: any = {}): Promise<any> => {
  const formattedQueries: TQuery = {
    ...payload,
    priceRange: payload.priceRange
      .split(",")
      .map((value: string) => Number(value)),
    author: payload.author.split(","),
    genre: payload.genre.split(","),
    publisher: payload.publisher.split(","),
    language: payload.language.split(","),
    // releasedRange: payload.releasedRange.split(","),
    priceSort: Number(payload.priceSort),
    seriesSort: Number(payload.seriesSort),
    releasedRange: [null, null],
  };

  const splittedDate: any = payload.releasedRange
    .split(",")
    .map((part: string) => part.trim());

  if (splittedDate[0] === "" && splittedDate[1] === "") {
    formattedQueries.releasedRange = [null, null];
  } else if (
    splittedDate[0] === "" &&
    splittedDate[1] !== "" &&
    splittedDate[2]
  ) {
    formattedQueries.releasedRange = [
      null,
      new Date(splittedDate[1] + ", " + splittedDate[2]),
    ];
  } else if (
    splittedDate[0] !== "" &&
    splittedDate[1] !== "" &&
    splittedDate[2] === ""
  ) {
    formattedQueries.releasedRange = [
      new Date(splittedDate[0] + ", " + splittedDate[1]),
      null,
    ];
  } else if (
    splittedDate[0] !== "" &&
    splittedDate[1] !== "" &&
    splittedDate[2] !== "" &&
    splittedDate[3] !== ""
  ) {
    formattedQueries.releasedRange = [
      new Date(splittedDate[0] + ", " + splittedDate[1]),
      new Date(splittedDate[2] + ", " + splittedDate[3]),
    ];
  }

  const dateRangeQuery: {
    $gte?: any;
    $lte?: any;
  } = {};

  if (formattedQueries.releasedRange[0]) {
    dateRangeQuery.$gte = formattedQueries.releasedRange[0];
  }
  if (formattedQueries.releasedRange[1]) {
    dateRangeQuery.$lte = formattedQueries.releasedRange[1];
  }

  // Wed, 14 Feb 2024 00:37:22 GMT,Wed, 07 Feb 2024 00:38:53 GMT

  const regexStr = new RegExp(formattedQueries.searchKey, "i");

  // eslint-disable-next-line prefer-const
  let queryParams: any = {
    name: {
      $regex: regexStr,
    },
    format: formattedQueries.format,
    price: {
      $gte: formattedQueries.priceRange[0],
      $lte: formattedQueries.priceRange[1],
    },
  };

  if (Object.keys(dateRangeQuery).length > 0) {
    queryParams.releasedOn = dateRangeQuery;
  }
  if (formattedQueries.ISBN.length > 0) {
    queryParams.ISBN = {
      $regex: new RegExp(formattedQueries.ISBN, "i"),
    };
  }
  if (formattedQueries.author.length > 0 && formattedQueries.author[0] !== "") {
    queryParams.author = {
      $in: formattedQueries.author,
    };
  }
  if (formattedQueries.genre.length > 0 && formattedQueries.genre[0] !== "") {
    queryParams.genre = {
      $in: formattedQueries.genre,
    };
  }
  if (
    formattedQueries.publisher.length > 0 &&
    formattedQueries.publisher[0] !== ""
  ) {
    queryParams.publisher = {
      $in: formattedQueries.publisher,
    };
  }
  if (
    formattedQueries.language.length > 0 &&
    formattedQueries.language[0] !== ""
  ) {
    queryParams.language = {
      $in: formattedQueries.language,
    };
  }

  const sortQuery: any = {};
  if (formattedQueries.discount === "least") {
    sortQuery.discount = 1;
  }
  if (formattedQueries.discount === "most") {
    sortQuery.discount = -1;
  }
  if (formattedQueries.priceSort === 1 || formattedQueries.priceSort === -1) {
    sortQuery.price = formattedQueries.priceSort;
  }

  const result = await Book.find(queryParams).sort(sortQuery);

  return result;
};

const getBookById = async (payload: { id: string }): Promise<any> => {};

const updateBookById = async (
  payload: {
    id?: any;
    data?: any;
  } = {},
): Promise<any> => {
  if (payload.data["buyer"]) {
    const dataForUpdate = {
      ...payload?.data,
      seller: new Types.ObjectId(payload?.data?._id),
    };

    const result = await Book.findByIdAndUpdate(
      { _id: new Types.ObjectId(payload?.id) },
      {
        $push: { sells: dataForUpdate },
        $inc: { quantity: -Number(dataForUpdate.quantity) },
      },
      {
        new: true,
      },
    );

    return result;
  } else {
    const result = await Book.findByIdAndUpdate(
      payload?.id,
      { ...payload?.data },
      {
        new: true,
      },
    );

    return result;
  }
};

const bookServices = {
  createBook,
  deleteBookById,
  getAllBook,
  updateBookById,
  getBookById,
  deleteAllBook,
};

export default bookServices;
