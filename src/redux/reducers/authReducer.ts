import { AnyAction } from "redux";
import * as types from "../../constant/userRequest";
import type { RootState } from "../../store";

interface UserProps {
  first_name: string;
  last_name: string;
  username: string;
  dob: string | undefined;
  gender: string;
  email: string;
}

interface loginProps {
  error: object | null;
  userInfo: UserProps | null;
}

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") || "{}")
  : null;

export const userLoginReducer = (
  state = userInfoFromStorage,
  action: AnyAction
): loginProps => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
      return { error: null, userInfo: null };
    case types.USER_LOGIN_SUCCESS:
      return { error: null, userInfo: action.payload };
    case types.USER_LOGIN_FAILURE:
      return { error: action.payload, userInfo: null };
    case types.USER_LOGOUT:
      return { error: null, userInfo: null };
    default:
      return { error: null, userInfo: null };
  }
};

export const userRegisterReducer = (
  state: {},
  action: AnyAction
): loginProps => {
  switch (action.type) {
    case types.USER_REGISTER_REQUEST:
      return { error: null, userInfo: null };
    case types.USER_REGISTER_SUCCESS:
      return { error: null, userInfo: action.payload };
    case types.USER_REGISTER_FAILURE:
      return { error: action.payload, userInfo: null };
    case types.USER_LOGOUT:
      return { error: null, userInfo: null };
    default:
      return { error: null, userInfo: null };
  }
}
