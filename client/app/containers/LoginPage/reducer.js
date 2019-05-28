/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {DEFAULT_ACTION, AUTH_FAILED, LOGIN_SUCCESS, REDIRECT} from './constants';
import {CHANGE_EMAIL, CHANGE_PASSWORD} from "../LoginPage/constants";

export const initialState = {
  email: "",
  password:"",
  token: "",
  wrongAuth: false,
  authenticated: false,
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
      case AUTH_FAILED:
        draft.wrongAuth = true;
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
