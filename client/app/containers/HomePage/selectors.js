/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsers = () =>
  createSelector(
    selectHome,
    homeState => homeState.users,
  );

export { selectHome, makeSelectUsers };
