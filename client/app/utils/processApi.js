import {SERVER_URL} from "./constants";

const SERVER_PROCESS = `${SERVER_URL}/process`;

let headers = {
  'Content-Type': 'application/json',
};


export const getAll = (action) => {

  headers = {...headers, 'Authorization': `Bearer ${action.token}`};

  return fetch(`${SERVER_PROCESS}/list`, {
    method: 'GET',
    headers,
  }).then(res => res.json());
};

export const create = (action) => {
  headers = {...headers, ...action, 'Authorization': `Bearer ${action.token}`,};

  return fetch(SERVER_PROCESS, {
    method: 'POST',
    headers,
    body: JSON.stringify(action.process)
  })
    .then(res => res.json());
};

export const remove = (action) => {
  headers = {...headers, ...action, 'Authorization': `Bearer ${action.token}`,};

  fetch(`${SERVER_PROCESS}/${action.id}`, {
    method: 'DELETE',
    headers,
  });
};

