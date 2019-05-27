import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.login || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */
const makeSelectEmail = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.email,
  );

const makeSelectPassword = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.password,
  );

const makeSelectLoginPage = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate,
  );

const makeSelectWrongAuth = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.wrongAuth,
  );

const makeSelectAuthenticated = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.authenticated,
  );

export default makeSelectLoginPage;
export {selectLoginPageDomain, makeSelectPassword, makeSelectEmail, makeSelectWrongAuth, makeSelectAuthenticated};
