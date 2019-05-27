import {SERVER_URL} from "./constants";

const SERVER_USERS = `${SERVER_URL}/users`;

let headers = {
  'Content-Type': 'application/json',
};

export const getAll = (action) => () => {

  headers = {...headers, 'Authorization': `Bearer ${action.token}`};

  return fetch(SERVER_USERS, {
    method: 'GET',
    headers,
  })
    .then(res => res.json())
    .then(data => {
      return data._embedded.users});
};

export const getByEmail = (action) => () => {

  headers = {...headers, 'Authorization': `Bearer ${action.token}`};

  return fetch(`${SERVER_USERS}/email/${action.email}`, {
    method: 'GET',
    headers,
  })
    .then(res => res.json());
};
