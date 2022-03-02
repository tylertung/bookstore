import { combineReducers } from 'redux';
import { userLoginReducer,userRegisterReducer } from "./authReducer";
import { getListBookReducer } from './bookReducer';

export const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  bookList: getListBookReducer
})