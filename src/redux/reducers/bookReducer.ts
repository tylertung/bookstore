import { AnyAction } from "redux";
import * as types from "../actions/bookAction";
import { createBookProps, ListBookProps, OneBookProps } from "../../constant/types";

const initialState = {} as ListBookProps;

export const getListBookReducer = (
  state = initialState,
  action: AnyAction
): ListBookProps => {
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
  state = {} as createBookProps,
  action: AnyAction
): createBookProps => {
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
