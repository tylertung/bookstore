import axiosInstance from "../../base/axios";
import * as urls from "../../constant/urlRequest";
import type { AppDispatch } from "../store";

export const COMMENT_REQUEST = "COMMENT_REQUEST";
export const COMMENT_SUCCESS = "COMMENT_SUCCESS";
export const COMMENT_FAILURE = "COMMENT_FAILURE";

export const createComment =
  (content: string, book_id: string,user_id: number | undefined) => async (dispatch: AppDispatch) => {
    dispatch({ type: COMMENT_REQUEST });
    try {
      const response = await axiosInstance.post(
        `${urls.booksUrl}/${book_id}/comments`,
        { comment: { content: content, book_id: book_id, user_id: user_id } }
      );
      dispatch({
        type: COMMENT_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: COMMENT_FAILURE,
        payload: error.message,
      });
    }
  };
