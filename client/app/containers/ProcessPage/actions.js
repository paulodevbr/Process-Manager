/*
 *
 * ProcessPage actions
 *
 */

import {
  CHANGE_DESCRIPTION,
  CHANGE_TITLE,
  CHANGE_USERS, CLEAR_PROCESS_FORM,
  LOAD_USERS_LIST,
  LOAD_USERS_LIST_SUCCESS
} from './constants';

export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    title,
  };
}


export function changeDescription(description) {
  return {
    type: CHANGE_DESCRIPTION,
    description,
  };
}

export function changeUsers(password) {
  return {
    type: CHANGE_USERS,
    password,
  };
}

export function loadUsersList() {
  return {
    type: LOAD_USERS_LIST,
  };
}

export function loadUsersListSuccess(usersList) {
  return {
    type: LOAD_USERS_LIST_SUCCESS,
    usersList
  };
}

export function clearProcessForm(){
  return {
    type: CLEAR_PROCESS_FORM,
  }
}
