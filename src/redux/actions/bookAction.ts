import axiosInstance from "../../base/axios";
import * as urls from "../../constant/urlRequest";
import type { AppDispatch } from "../../store";

export const BOOK_CREATE_REQUEST = "BOOK_REQUEST";
export const BOOK_CREATE_SUCCESS = "BOOK_CREATE_SUCCESS";
export const BOOK_CREATE_FAILURE = "BOOK_CREATE_FAILURE";

export const BOOK_LIST_REQUEST = "BOOK_LIST_REQUEST";
export const BOOK_LIST_SUCCESS = "BOOK_LIST_SUCCESS";
export const BOOK_LIST_FAILURE = "BOOK_LIST_FAILURE";

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
        payload: "Created book"
      });
    } catch (error: any) {
      dispatch({
        type: BOOK_CREATE_FAILURE,
        payload: error.response,
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
      payload: error.response,
    });
  }
};
