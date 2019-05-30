import {all, call, put, select, takeLatest} from 'redux-saga/effects';

import * as UserApi from '../../utils/userApi';
import {LOAD_USERS_LIST} from "./constants";
import makeSelectLoginPage from "../LoginPage/selectors";
import {loadUsersListSuccess} from "./actions";
import {FINALIZADOR} from "../HomePage/constants";

export function* loadUsers(action) {
  const loginForm = yield select(makeSelectLoginPage());

  const {token} = loginForm;

  //Hardcoded to find users that can add report to process
  action = {...action, token, userGroup: FINALIZADOR};

  const usersList = yield call(UserApi.getAllByUserGroup, action);
  yield put(loadUsersListSuccess(usersList));
}


export default function* processPageSaga() {
  // See example in containers/HomePage/saga.js

  yield all([
    yield takeLatest(LOAD_USERS_LIST, loadUsers),
  ])
}
