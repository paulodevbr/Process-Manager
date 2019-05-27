/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the LoginPage container!',
  },
  wrongAuth: {
    id: `${scope}.wrongAuth`,
    defaultMessage: 'Invalid email or password',
  },
  emailLabel: {
    id: `${scope}.email.label`,
    defaultMessage: 'Email',
  },
  emailDescription: {
    id: `${scope}.email.description`,
    defaultMessage: 'Email address',
  },
  passwordLabel: {
    id: `${scope}.password.label`,
    defaultMessage: 'Password',
  },
  passwordDescription: {
    id: `${scope}.password.description`,
    defaultMessage: 'Password',
  },
  submitButton: {
    id: `${scope}.submit.button`,
    defaultMessage: 'Submit',
  },
});
