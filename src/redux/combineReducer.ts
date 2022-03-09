import { combineReducers } from "redux";
import { userLoginReducer } from "./auth/authReducer";
import {
  createBookReducer,
  getListBookReducer,
  listGenresReducer,
} from "./book/bookReducer";

export const reducer = combineReducers({
  userLogin: userLoginReducer,
  bookList: getListBookReducer,
  createBook: createBookReducer,
  genresList: listGenresReducer,
});
