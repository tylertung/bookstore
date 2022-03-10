import axiosInstance from "../../base/axios";
import * as urls from "../../constant/urlRequest";
import type { AppDispatch } from "../store";

export const BOOK_CREATE_REQUEST = "BOOK_REQUEST";
export const BOOK_CREATE_SUCCESS = "BOOK_CREATE_SUCCESS";
export const BOOK_CREATE_FAILURE = "BOOK_CREATE_FAILURE";

export const BOOK_LIST_REQUEST = "BOOK_LIST_REQUEST";
export const BOOK_LIST_SUCCESS = "BOOK_LIST_SUCCESS";
export const BOOK_LIST_FAILURE = "BOOK_LIST_FAILURE";

export const BOOK_DETAIL_REQUEST = "BOOK_DETAIL_REQUEST";
export const BOOK_DETAIL_SUCCESS = "BOOK_DETAIL_SUCCESS";
export const BOOK_DETAIL_FAILURE = "BOOk_DETAIL_SUCCESS";

export const BOOK_LIST_GENRES_REQUEST = "BOOK_LIST_GENRES_REQUEST";
export const BOOK_LIST_GENRES_SUCCESS = "BOOK_LIST_GENRES_SUCCESS";
export const BOOK_LIST_GENRES_FAILURE = "BOOK_LIST_GENRES_FAILURE";

export const BOOK_SEARCH_REQUEST = "BOOK_SEARCH_REQUEST";
export const BOOK_SEARCH_SUCCESS = "BOOK_SEARCH_SUCCESS";
export const BOOK_SEARCH_FAILURE = "BOOK_SEARCH_FAILURE";

interface createBookProps {
  title: string;
  description: string;
  author_id: number;
}

export const createBook =
  (input: createBookProps) => async (dispatch: AppDispatch) => {
    dispatch({ type: BOOK_CREATE_REQUEST });
    try {
      await axiosInstance.post(`${urls.booksUrl}`, {
        book: input,
      });
      dispatch({
        type: BOOK_CREATE_SUCCESS,
        payload: "Created book",
      });
    } catch (error: any) {
      dispatch({
        type: BOOK_CREATE_FAILURE,
        payload: error.message,
      });
    }
  };

export const getListBook = () => async (dispatch: AppDispatch) => {
  dispatch({ type: BOOK_LIST_REQUEST });
  try {
    const response = await axiosInstance.get(`${urls.booksUrl}`);
    dispatch({
      type: BOOK_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: BOOK_LIST_FAILURE,
      payload: error.message,
    });
  }
};

export const getDetailBook = (id: number) => async (dispatch: AppDispatch) => {
  dispatch({ type: BOOK_DETAIL_REQUEST });
  try {
    const response = await axiosInstance.get(`${urls.booksUrl}/${id}`);
    dispatch({
      type: BOOK_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: BOOK_DETAIL_FAILURE,
      payload: error.message,
    });
  }
};

export const getListGenres = () => async (dispatch: AppDispatch) => {
  dispatch({ type: BOOK_LIST_GENRES_REQUEST });
  try {
    const response = await axiosInstance.get(`${urls.genresUrl}`);
    dispatch({
      type: BOOK_LIST_GENRES_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: BOOK_LIST_GENRES_FAILURE,
      payload: error.message,
    });
  }
};

export const searchByTitle =
  (keyword: string) => async (dispatch: AppDispatch) => {
    dispatch({ type: BOOK_SEARCH_REQUEST });
    try {
      const response = await axiosInstance.get(`${urls.booksUrl}`, {
        params: { start_with: keyword },
      });
      dispatch({
        type: BOOK_SEARCH_SUCCESS,
        payload: response.data
      })
    } catch (error: any) {
      dispatch({
        type: BOOK_SEARCH_FAILURE,
        payload: error.message,
      });
    }
  };
