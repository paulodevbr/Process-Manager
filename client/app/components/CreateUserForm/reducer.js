import produce from 'immer';
import {CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASSWORD, CHANGE_USERGROUP, CLEAR_USER_FORM} from "./constants";

// The initial state of the App
export const initialState = {
  name: '',
  email: '',
  password: '',
  userGroupId: '',
  userGroup: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NAME:
        draft.name = action.name;
        break;
      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;
      case CHANGE_EMAIL:
        draft.email = action.email;
        break;
      case CHANGE_USERGROUP:
        draft.userGroupId = action.id;
        draft.userGroup = action.userGroup;
        break;
      case CLEAR_USER_FORM:
        draft.name= '';
        draft.email= '';
        draft.password= '';
        draft.userGroupId= '';
        draft.userGroup= '';
        break;
    }
  });

export default homeReducer;
