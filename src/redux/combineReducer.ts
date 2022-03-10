import { combineReducers } from "redux";
import { userLoginReducer } from "./auth/authReducer";
import {
  createBookReducer,
  detailBookReducer,
  getListBookReducer,
  listGenresReducer,
} from "./book/bookReducer";
import { createCommentReducer } from "./review/commentReducer";

export const reducer = combineReducers({
  userLogin: userLoginReducer,
  bookList: getListBookReducer,
  createBook: createBookReducer,
  genresList: listGenresReducer,
  detailBook: detailBookReducer,
  createComment: createCommentReducer,
});
