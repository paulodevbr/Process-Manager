/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {CHANGE_EMAIL, CHANGE_PASSWORD, DEFAULT_ACTION, LOGIN_SUCCESS} from './constants';

export const initialState = {
  email: "",
  password:"",
  token: "",
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce((state, draft) => {
    switch (action.type) {
      case CHANGE_EMAIL:
        draft.email = action.email;
        break;

      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;

      case LOGIN_SUCCESS:
        draft.email = action.email;
        draft.password = action.password;
        draft.token = action.token;
        break;

      case DEFAULT_ACTION:
        break;
    }
  });

export default loginPageReducer;
