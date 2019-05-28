/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {DEFAULT_ACTION, AUTH_FAILED, LOGIN_SUCCESS, REDIRECT} from './constants';
import {CHANGE_EMAIL, CHANGE_PASSWORD} from "../LoginPage/constants";

export const initialState = {
  name: "",
  email: "",
  password:"",
  token: "",
  authFailed: false,
  authFailedMessage: "",
  authenticated: false,
  userGroup: "",
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft  => {
    switch (action.type) {
      case CHANGE_EMAIL:
        draft.email = action.email;
        break;
      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;
      case LOGIN_SUCCESS:
        draft.name = action.userData.name;
        draft.email = action.userData.email;
        draft.password = action.userData.password;
        draft.token = action.userData.token;
        draft.userGroup = action.userData.userGroup.name;
        break;
      case AUTH_FAILED:
        draft.authFailed = true;
        draft.authFailedMessage = action.message;
        break;
      case REDIRECT:
        draft.authenticated = true;
        draft.token = action.token;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default loginPageReducer;
