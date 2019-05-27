import {SERVER_URL} from "./constants";

const headers = {
  'Content-Type': 'application/json',
};

export const authenticate = (email, password) => () => {
  return fetch(`${SERVER_URL}/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify({email, password}),
  })
    .then(res => res.json())
    .then(data => {
      return data.token});
};
