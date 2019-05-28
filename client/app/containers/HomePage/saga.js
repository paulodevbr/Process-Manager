/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import * as UserApi from '../../utils/userApi';
import {LOAD_LIST} from "./constants";
import {loadListSuccess} from "./actions";
import makeSelectLoginPage from "../LoginPage/selectors";


/**
 * Github repos request/response handler
 */
export function* loadListObjects() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  try {
    // Call our request helper (see 'utils/request')
    const loginData = yield select(makeSelectLoginPage());
    const { token } = loginData;

    console.log(loginData);
    const objects = yield call(UserApi.getAll({ token }), '');
    yield put(loadListSuccess(objects));
  } catch (err) {
    console.log(err);
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls loadListObjects when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_LIST, loadListObjects);
}
