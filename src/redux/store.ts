import { createStore } from "redux";
import {
  CreateBookStates,
  ListBookStates,
  ListGenresBookState,
  LoginStates,
  OneBookStates,
} from "../constant/types";
import { reducer } from "./combineReducer";
import { getDetailUser } from "./auth/authAction";

export const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export interface RootState {
  userLogin: LoginStates;
  bookList: ListBookStates;
  createBook: CreateBookStates;
  genresList: ListGenresBookState;
  detailBook: OneBookStates;
}

getDetailUser()(store.dispatch);

export type AppDispatch = typeof store.dispatch;
