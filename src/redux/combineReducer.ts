import { combineReducers } from 'redux';
import { userLoginReducer } from "./auth/authReducer";
import { createBookReducer, getListBookReducer } from './book/bookReducer';

export const reducer = combineReducers({
  userLogin: userLoginReducer,
  bookList: getListBookReducer,
  createBook: createBookReducer
})