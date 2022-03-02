import { createStore } from "redux";
import { USER_INFO } from "../src/constant/common";
import { ListBookProps, LoginProps } from "./constant/types";
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
}

export type AppDispatch = typeof store.dispatch;
