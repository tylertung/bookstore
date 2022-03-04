import { createStore } from "redux";
import {
  createBookStates,
  ListBookStates,
  LoginStates,
  OneBookStates,
} from "../constant/types";
import { reducer } from "./combineReducer";

export const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export interface RootState {
  userLogin: LoginStates;
  bookList: ListBookStates;
  createBook: createBookStates;
  oneBook: OneBookStates;
}

export type AppDispatch = typeof store.dispatch;
