/*
 * ObjectForm Messages
 *
 * This contains all the text for the ObjectForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  adminFormTitle: {
    id: `${scope}.admin.button`,
    defaultMessage: 'Create user',
  },
  triadorFormTitle: {
    id: `${scope}.triador.button`,
    defaultMessage: 'Create process',
  },
});
