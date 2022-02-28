import axios from "axios";
import * as types from "../../constant/userRequest";
import * as urls from "../../constant/urlRequest";
import type { AppDispatch } from "../../store";

interface loginProps {
  email: string;
  password: string;
}

interface registerProps {
  first_name: string;
  last_name: string;
  username: string;
  dob: string | undefined;
  gender: string;
  email: string;
  password: string;
}

export const login = (input: loginProps) => async (dispatch: AppDispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  await axios
    .post(`${urls.baseUrl}${urls.loginUrl}`, { user: input }, config)
    .then(async function (response) {
      if (response.data.token) {
        axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        const res = await axios.get(`${urls.baseUrl}${urls.authUrl}`);
        dispatch({
          type: types.USER_LOGIN_SUCCESS,
          payload: res.data.user,
        });
        localStorage.setItem("userInfo", JSON.stringify(res.data.user));
      }
    })
    .catch(function (error) {
      dispatch({
        type: types.USER_LOGIN_FAILURE,
        payload: error.response.data.error,
      });
    });
};

export const register =
  (input: registerProps) => async (dispatch: AppDispatch) => {
    dispatch({ type: types.USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post(`${urls.baseUrl}${urls.registerUrl}`, { user: input }, config)
      .then(async function (response) {
        dispatch({
          type: types.USER_REGISTER_SUCCESS,
          payload: response.data,
        })
        if (response.data.token) {
          axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          const res = await axios.get(`${urls.baseUrl}${urls.authUrl}`);
          dispatch({
            type: types.USER_LOGIN_SUCCESS,
            payload: res.data.user,
          });
        }
      })
      .catch(function (error) {
        dispatch({
          type: types.USER_REGISTER_FAILURE,
          payload: error.response.data.error,
        });
      });
  };
