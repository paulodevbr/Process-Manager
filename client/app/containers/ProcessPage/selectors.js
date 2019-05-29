import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the processPage state domain
 */

const selectProcessPageDomain = state => state.processPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProcessPage
 */

const makeSelectProcessPage = () =>
  createSelector(
    selectProcessPageDomain,
    substate => substate,
  );

export default makeSelectProcessPage;
export { selectProcessPageDomain };
