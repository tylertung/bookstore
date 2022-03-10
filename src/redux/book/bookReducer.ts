import { AnyAction } from "redux";
import * as types from "./bookAction";
import {
  createBookStates,
  ListBookStates,
  ListGenresBookState,
  OneBookStates,
} from "../../constant/types";

const initialState = {} as ListBookStates;

export const getListBookReducer = (
  state = initialState,
  action: AnyAction
): ListBookStates => {
  switch (action.type) {
    case types.BOOK_LIST_REQUEST:
    case types.BOOK_SEARCH_REQUEST:
      return { ...state };
    case types.BOOK_LIST_SUCCESS:
    case types.BOOK_SEARCH_SUCCESS:
      state.books = action.payload;
      return { ...state };
    case types.BOOK_LIST_FAILURE:
    case types.BOOK_SEARCH_FAILURE:
      state.errors = action.payload;
      return { ...state };
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
      return { ...state };
    case types.BOOK_DETAIL_SUCCESS:
      state.book = action.payload;
      return { ...state };
    case types.BOOK_DETAIL_FAILURE:
      state.errors = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export const listGenresReducer = (
  state = {} as ListGenresBookState,
  action: AnyAction
): ListGenresBookState => {
  switch (action.type) {
    case types.BOOK_LIST_GENRES_REQUEST:
      return { ...state };
    case types.BOOK_LIST_GENRES_SUCCESS:
      state.genres = action.payload;
      return { ...state };
    case types.BOOK_LIST_GENRES_FAILURE:
      state.errors = action.payload;
      return { ...state };
    default:
      return state;
  }
};
