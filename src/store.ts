import { createStore } from "redux";
import {
  createBookProps,
  ListBookProps,
  LoginProps,
  OneBookProps,
} from "./constant/types";
import { reducer } from "./redux/reducers/combinReducer";

export const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export interface RootState {
  userLogin: LoginProps;
  userRegister: LoginProps;
  bookList: ListBookProps;
  createBook: createBookProps;
  oneBook: OneBookProps;
}

export type AppDispatch = typeof store.dispatch;
