/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CREATE_OBJECT,
  CREATE_OBJECT_SUCCESS,
  DELETE_OBJECT,
  HIDE_USER_FORM,
  LOAD_LIST,
  LOAD_LIST_SUCCESS,
  SHOW_USER_FORM
} from './constants';

// The initial state of the App
export const initialState = {
  objects: null,
  isCreatingUser: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_LIST:
      case LOAD_LIST_SUCCESS:
        draft.objects = action.objects;
        break;
      case SHOW_USER_FORM:
        draft.isCreatingUser = true;
        break;
      case HIDE_USER_FORM:
        draft.isCreatingUser = false;
        break;
      case CREATE_OBJECT_SUCCESS:
        draft.objects.push(action.object);
        break;
      case DELETE_OBJECT:
        const obj = draft.objects.find(o => o.id === action.id);
        const index = draft.objects.indexOf(obj);

        draft.objects.splice(index, 1);
        break;

    }
  });

export default homeReducer;
