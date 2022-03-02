import { AnyAction } from "redux";
import * as types from "../actions/authAction";
import { LoginProps } from "../../constant/types";

const initialState = {
} as LoginProps;

export const userLoginReducer = (
  state = initialState,
  action: AnyAction
): LoginProps => {
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
      return state;
  }
};

export const userRegisterReducer = (
  state = initialState,
  action: AnyAction
): LoginProps => {
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
      return state;
  }
};
