import { AnyAction } from "redux";
import * as types from "./bookAction";
import {
  createBookStates,
  ListBookStates,
  OneBookStates,
} from "../../constant/types";

const initialState = {} as ListBookStates;

export const getListBookReducer = (
  state = initialState,
  action: AnyAction
): ListBookStates => {
  switch (action.type) {
    case types.BOOK_LIST_REQUEST:
      return { errors: null, books: null };
    case types.BOOK_LIST_SUCCESS:
      return { errors: null, books: action.payload };
    case types.BOOK_LIST_FAILURE:
      return { errors: action.payload, books: null };
    default:
      return state;
  }
};

export const createBookReducer = (
  state = {} as createBookStates,
  action: AnyAction
): createBookStates => {
  switch (action.type) {
    case types.BOOK_CREATE_REQUEST:
      return { errors: null, success: null };
    case types.BOOK_CREATE_SUCCESS:
      return { errors: null, success: action.payload };
    case types.BOOK_CREATE_FAILURE:
      return { errors: action.payload, success: null };
    default:
      return state;
  }
};

export const detailBookReducer = (
  state = {} as OneBookStates,
  action: AnyAction
): OneBookStates => {
  switch (action.type) {
    case types.BOOK_DETAIL_REQUEST:
      return { errors: null, book: null };
    case types.BOOK_DETAIL_SUCCESS:
      return { errors: null, book: action.payload };
    case types.BOOK_DETAIL_FAILURE:
      return { errors: action.payload, book: null };
    default:
      return state;
  }
};
