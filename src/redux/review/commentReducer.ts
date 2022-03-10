import { AnyAction } from "redux";
import { CommentState } from "../../constant/types";
import * as types from "./commentAction";

export const createCommentReducer = (
  state = {} as CommentState,
  action: AnyAction
): CommentState => {
  switch (action.type) {
    case types.COMMENT_REQUEST:
      return { ...state };
    case types.COMMENT_SUCCESS:
      state.comment = action.payload;
      return { ...state };
    case types.COMMENT_FAILURE:
      state.errors = action.payload;
      return { ...state };
    default:
      return state;
  }
};
