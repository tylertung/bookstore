import axiosInstance from "../../base/axios";
import * as urls from "../../constant/urlRequest";
import type { AppDispatch } from "../store";
import { TOKEN_KEY, USER_INFO } from "../../constant/common";

interface loginStates {
  email: string;
  password: string;
}

interface registerStates {
  first_name: string;
  last_name: string;
  username: string;
  dob: string | undefined;
  gender: string;
  email: string;
  password: string;
}

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN FAILURE";
export const USER_LOGOUT = "USER_LOGOUT";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE";

export const USER_RESET_STATE = "USER_RESET_STATE";

export const login = (input: loginStates) => async (dispatch: AppDispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  try {
    const {
      data: { token },
    } = await axiosInstance.post<{ token: string }>(`${urls.loginUrl}`, {
      user: input,
    });

    localStorage.setItem(TOKEN_KEY, token);

    const res = await axiosInstance.get(`${urls.authUrl}`);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data.user,
    });
  } catch (error: any) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.message,
    });
  }
};

export const register =
  (input: registerStates) => async (dispatch: AppDispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    try {
      const {
        data: { token },
      } = await axiosInstance.post<{ token: string }>(`${urls.registerUrl}`, {
        user: input,
      });

      localStorage.setItem(TOKEN_KEY, token);

      const res = await axiosInstance.get(`${urls.authUrl}`);

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data.user,
      });
    } catch (error: any) {
      dispatch({
        type: USER_REGISTER_FAILURE,
        payload: error.message,
      });
    }
  };

export const logout = () => (dispatch: AppDispatch) => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_INFO);
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/";
};

export const cleanError = () => (dispatch: AppDispatch) => {
  dispatch({ type: USER_RESET_STATE });
};

export const DETAIL_USER_REQUEST = "DETAIL_USER_REQUEST"
export const DETAIL_USER_SUCCESS = "DETAIL_USER_SUCCESS"
export const DETAIL_USER_FAILURE = "DETAIL_USER_FAILURE"

