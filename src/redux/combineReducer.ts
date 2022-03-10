import { combineReducers } from "redux";
import { userLoginReducer } from "./auth/authReducer";
import {
  createBookReducer,
  detailBookReducer,
  getListBookReducer,
  listGenresReducer,
} from "./book/bookReducer";

export const reducer = combineReducers({
  userLogin: userLoginReducer,
  bookList: getListBookReducer,
  createBook: createBookReducer,
  genresList: listGenresReducer,
  detailBook: detailBookReducer,
});
