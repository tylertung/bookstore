import { combineReducers } from 'redux';
import { userLoginReducer,userRegisterReducer } from "./authReducer";
import { createBookReducer, getListBookReducer } from './bookReducer';

export const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  bookList: getListBookReducer,
  createBook: createBookReducer
})