import { AnyAction } from "redux";
import * as types from '../actions/bookAction'
import { ListBookProps } from "../../constant/types";

const initialState = {} as ListBookProps

export const getListBookReducer = (state = initialState, action: AnyAction ): ListBookProps => {
  switch(action.type){
    case types.BOOK_LIST_REQUEST:
      return {errors: null,books: null};
    case types.BOOK_LIST_SUCCESS:
      return {errors: null,books: action.payload};
    case types.BOOK_LIST_FAILURE:
      return {errors: action.payload,books: null};
    default:
      return state;
  }
}