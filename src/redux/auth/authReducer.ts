import { AnyAction } from 'redux';

import { LoginStates } from '../../constant/types';
import * as types from './authAction';

const initialState = {
  authorizing: false,
  authorized: false,
} as LoginStates;

export const userLoginReducer = (
  state = initialState,
  action: AnyAction = {
    type: undefined,
  }
): LoginStates => {
  switch (action.type) {
    case types.USER_LOGIN_REQUEST:
    case types.USER_REGISTER_REQUEST:
    case types.DETAIL_USER_REQUEST: {
      return { ...state, authorizing: true };
    }
    case types.USER_LOGIN_SUCCESS:
    case types.USER_REGISTER_SUCCESS:
    case types.DETAIL_USER_SUCCESS: {
      state.errors = null;
      state.userInfo = action.payload;

      state.authorizing = false;
      state.authorized = true;

      return { ...state };
    }

    case types.USER_LOGIN_FAILURE:
    case types.USER_REGISTER_FAILURE:
    case types.DETAIL_USER_FAILURE: {
      state.errors = action.payload;
      state.userInfo = null;
      state.authorizing = false;
      state.authorized = false;

      return { ...state };
    }
    case types.USER_LOGOUT: {
      state.authorized = false;
      state.errors = null;
      state.userInfo = null;
      state.authorizing = false;
      return { ...state };
    }
    case types.USER_RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
