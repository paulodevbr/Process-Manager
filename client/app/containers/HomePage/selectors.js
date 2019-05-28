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

export { selectHome, makeSelectObjects };
