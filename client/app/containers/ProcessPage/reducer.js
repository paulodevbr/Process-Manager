/*
 *
 * ProcessPage reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_DESCRIPTION,
  CHANGE_TITLE,
  CLEAR_PROCESS_FORM,
  LOAD_USERS_LIST,
  LOAD_USERS_LIST_SUCCESS
} from './constants';

export const initialState = {
  title: '',
  description: '',
  users: null,
  usersList: null,
  createdProcess: false,
};

/* eslint-disable default-case, no-param-reassign */
const processPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_TITLE:
        draft.title = action.title;
        break;
      case CHANGE_DESCRIPTION:
        draft.description = action.description;
        break;
      case LOAD_USERS_LIST:
      case LOAD_USERS_LIST_SUCCESS:
        draft.createdProcess = false;
        draft.usersList = action.usersList;
        break;
      case CLEAR_PROCESS_FORM:
        draft.title = '';
        draft.description = '';
        draft.users = null;
        draft.createdProcess = true;
        break;
    }
  });

export default processPageReducer;
