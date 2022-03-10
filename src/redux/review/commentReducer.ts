import { AnyAction } from "redux";
import { CommentCreateState } from "../../constant/types";
import * as types from "./commentAction";

export const createCommentReducer = (
  state = {} as CommentCreateState,
  action: AnyAction
): CommentCreateState => {
  switch (action.type) {
    case types.COMMENT_REQUEST:
      return { ...state };
    case types.COMMENT_SUCCESS:
      state.comment = action.payload
      return { ...state };
    case types.COMMENT_FAILURE:
      state.errors = action.payload;
      return { ...state };
    default:
      return state;
  }
};
