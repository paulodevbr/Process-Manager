/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';
import {CHANGE_EMAIL, CHANGE_PASSWORD} from "../LoginPageaa/constants";

export const initialState = {
  email: "",
  password:"",
  token: "",
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
      case DEFAULT_ACTION:
        break;
    }
  });

export default loginPageReducer;
