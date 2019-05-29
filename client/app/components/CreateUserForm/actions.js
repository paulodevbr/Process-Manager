import {CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASSWORD, CHANGE_USERGROUP, CLEAR_USER_FORM, CREATE_USER} from "./constants";

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name,
  };
}


export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

export function changeUserGroup(id, userGroup) {
  return {
    type: CHANGE_USERGROUP,
    id,
    userGroup,
  };
}

export function clearUserForm() {
  return {
    type: CLEAR_USER_FORM,
  };
}
