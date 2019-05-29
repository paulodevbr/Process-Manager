import {SERVER_URL} from "./constants";

const SERVER_USERS = `${SERVER_URL}/users`;

let headers = {
  'Content-Type': 'application/json',
};

export const getAll = (action) => () => {

  headers = {...headers, 'Authorization': `Bearer ${action.token}`};

  return fetch(`${SERVER_USERS}/list`, {
    method: 'GET',
    headers,
  }).then(res => res.json());
};

export const create = (action) => () => {
  headers = {...headers, ...action, 'Authorization': `Bearer ${action.token}`,};

  return fetch(SERVER_USERS, {
    method: 'POST',
    headers,
    body: JSON.stringify(action.user)
  })
    .then(res => res.json());
};

export const remove = (action) => {
  headers = {...headers, ...action, 'Authorization': `Bearer ${action.token}`,};

  fetch(`${SERVER_USERS}/${action.id}`, {
    method: 'DELETE',
    headers,
  });
};

export const getByEmail = (action) => () => {

  headers = {...headers, 'Authorization': `Bearer ${action.token}`};

  return fetch(`${SERVER_USERS}/email/${action.email}`, {
    method: 'GET',
    headers,
  })
    .then(res => res.json());
};
