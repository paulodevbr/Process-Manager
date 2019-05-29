/*
 *
 * ProcessPage actions
 *
 */

import {CHANGE_DESCRIPTION, CHANGE_TITLE, DEFAULT_ACTION} from './constants';
import {
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_PASSWORD,
  CHANGE_USERGROUP,
  CLEAR_USER_FORM
} from "../../components/CreateUserForm/constants";

export function changeTitle(name) {
  return {
    type: CHANGE_TITLE,
    name,
  };
}


export function changeDescription(email) {
  return {
    type: CHANGE_DESCRIPTION,
    email,
  };
}

export function changeUsers(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}
