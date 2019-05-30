/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';
export const scopeInput = 'app.components.input';

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
    id: `${scopeInput}.email.label`,
    defaultMessage: 'Email',
  },
  emailDescription: {
    id: `${scopeInput}.email.description`,
    defaultMessage: 'Email address',
  },
  passwordLabel: {
    id: `${scopeInput}.password.label`,
    defaultMessage: 'Password',
  },
  passwordDescription: {
    id: `${scopeInput}.password.description`,
    defaultMessage: 'Password',
  },
  submitButton: {
    id: `${scope}.submit.button`,
    defaultMessage: 'Submit',
  },
  presentationTitle: {
    id: `${scope}.presentation.title`,
    defaultMessage: 'Login',
  },
  presentationDetail: {
    id: `${scope}.presentation.detail`,
    defaultMessage: 'Enter your email and password to start working!',
  }
});
