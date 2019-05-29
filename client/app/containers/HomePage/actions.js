/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {LOAD_LIST, LOAD_LIST_SUCCESS, SHOW_USER_FORM} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_EMAIL
 */
export function loadList() {
  return {
    type: LOAD_LIST,
  };
}

export function loadListSuccess(objects) {
  return {
    type: LOAD_LIST_SUCCESS,
    objects,
  };
}

export function showUserForm(){
  return {
    type: SHOW_USER_FORM,
  }
}

export function hideUserForm(){
  return {
    type: SHOW_USER_FORM,
  }
}
