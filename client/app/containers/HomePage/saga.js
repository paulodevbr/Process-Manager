/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import * as UserApi from 'utils/userApi';
import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import {LOAD_USERS} from "./constants";
import {SERVER_URL} from "../../utils/constants";
import {loadUsersSuccess} from "./actions";

/**
 * Github repos request/response handler
 */
export function* loadUsers() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  try {
    // Call our request helper (see 'utils/request')
    const users = yield call(UserApi.getAll, '');
    yield put(loadUsersSuccess(users));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls loadUsers when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_USERS, loadUsers);
}
