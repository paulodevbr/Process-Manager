/*
 *
 * ProcessPage reducer
 *
 */
import produce from 'immer';
import {CHANGE_DESCRIPTION, CHANGE_TITLE, LOAD_USERS_LIST, LOAD_USERS_LIST_SUCCESS} from './constants';

export const initialState = {
  title: '',
  description: '',
  users: null,
  usersList: null,
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
        draft.usersList = action.usersList;
        break;
    }
  });

export default processPageReducer;
