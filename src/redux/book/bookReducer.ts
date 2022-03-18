import { AnyAction } from 'redux';

import { CreateBookStates, ListBookStates, ListGenresBookState, OneBookStates } from '../../constant/types';
import * as types from './bookAction';

const initialState = {} as ListBookStates;

export const getListBookReducer = (
  state = initialState,
  action: AnyAction = {
    type: undefined,
  }
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
  state = {} as CreateBookStates,
  action: AnyAction = {
    type: undefined,
  }
): CreateBookStates => {
  switch (action.type) {
    case types.BOOK_CREATE_REQUEST:
      return { ...state };
    case types.BOOK_CREATE_SUCCESS:
      state.book = action.payload;
      return { ...state };
    case types.BOOK_CREATE_FAILURE:
      state.errors = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export const detailBookReducer = (
  state = {} as OneBookStates,
  action: AnyAction = {
    type: undefined,
  }
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
  action: AnyAction = {
    type: undefined,
  }
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
