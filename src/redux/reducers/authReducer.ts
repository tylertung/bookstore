import { AnyAction } from "redux";
import * as types from "../actions/authAction"
import {USER_INFO} from '../../constant/common'
import type { RootState } from "../../store";

interface userProps {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  dob: string | undefined;
  gender: string;
  email: string;
  role: string;
}

interface loginProps {
  errors: {
    first_name: string | null,
    last_name: string | null,
    username: string | null,
    email: string | null,
    password: string | null,
    password_confirmation: string | null;
  } | null;
  userInfo: userProps | null;
}

const userInfoFromStorage = localStorage.getItem(USER_INFO)
  ? JSON.parse(localStorage.getItem(USER_INFO) || "{}")
  : null;

export const userLoginReducer = (
  state = userInfoFromStorage,
  action: AnyAction
): loginProps => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return { errors: null, userInfo: null };
    case types.USER_LOGIN_SUCCESS:
      return { errors: null, userInfo: action.payload };
    case types.USER_LOGIN_FAILURE:
      return { errors: action.payload, userInfo: null };
    case types.USER_LOGOUT:
      return { errors: null, userInfo: null };
    default:
      return { errors: null, userInfo: null };
  }
};

export const userRegisterReducer = (
  state: {},
  action: AnyAction
): loginProps => {
  switch (action.type) {
    case types.USER_REGISTER_REQUEST:
      return { errors: null, userInfo: null };
    case types.USER_REGISTER_SUCCESS:
      return { errors: null, userInfo: action.payload };
    case types.USER_REGISTER_FAILURE:
      return { errors: action.payload, userInfo: null };
    case types.USER_LOGOUT:
      return { errors: null, userInfo: null };
    default:
      return { errors: null, userInfo: null };
  }
};
