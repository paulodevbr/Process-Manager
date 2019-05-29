import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectUserFormDomain = state => state.userForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectUserForm = () =>
  createSelector(
    selectUserFormDomain,
    substate => substate,
  );


export default makeSelectUserForm;
export {selectUserFormDomain, makeSelectUserForm};
