/*
 * CreateUserForm Messages
 *
 * This contains all the text for the CreateUserForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CreateUserForm';
export const scopeInput = 'app.components.input';

export default defineMessages({
  nameLabel: {
    id: `${scopeInput}.name.label`,
    defaultMessage: 'Name',
  },
  nameDescription: {
    id: `${scopeInput}.name.description`,
    defaultMessage: 'Arthur Morgan',
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
});
