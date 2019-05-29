/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectObjects = () =>
  createSelector(
    selectHome,
    homeState => homeState.objects,
  );

const makeSelectStatusUserForm = () =>
  createSelector(
    selectHome,
    homeState => homeState.isCreatingUser,
  );

export { selectHome, makeSelectObjects, makeSelectStatusUserForm };
