import {CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASSWORD, CHANGE_USERGROUP, CREATE_USER} from "./constants";

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

export function changeUserGroup(userGroup) {
  return {
    type: CHANGE_USERGROUP,
    userGroup,
  };
}

export function createuser() {
  return {
    type: CREATE_USER,
  };
}
