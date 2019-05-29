/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  adminTitle: {
    id: `${scope}.admin.title`,
    defaultMessage: 'Manage Users',
  },
  adminDetails: {
    id: `${scope}.admin.details`,
    defaultMessage: '"Here you can create, edit, update and delete users"',
  },
  adminFormTitle: {
    id: `${scope}.admin.button`,
    defaultMessage: 'Create user',
  },
  triadorTitle: {
    id: `${scope}.triador.title`,
    defaultMessage: 'Manage Processes',
  },
  triadorDetails: {
    id: `${scope}.triador.details`,
    defaultMessage: '"Here you can create, edit, update and delete your processes"',
  },
  triadorButton: {
    id: `${scope}.triador.button`,
    defaultMessage: 'Create process',
  },
  finalizadorTitle: {
    id: `${scope}.finalizador.title`,
    defaultMessage: 'Manage Reports',
  },
  finalizadorDetails: {
    id: `${scope}.finalizador.details`,
    defaultMessage: '"Here manage your pending reports"',
  },
});
