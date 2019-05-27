// import { take, call, put, select } from 'redux-saga/effects';
import {  call, put, takeLatest, select } from 'redux-saga/effects';
import { LOGIN} from "./constants";
import { authFailed, redirect} from "./actions";
import {loginSuccess,} from "../App/actions";
import * as LoginApi from "../../utils/loginApi.js"
import * as UserApi from "../../utils/userApi.js"
import makeSelectLoginPage, {makeSelectEmail, makeSelectPassword} from "./selectors";

// Individual exports for testing
export function* login() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  // try {
  //   // Call our request helper (see 'utils/request')
  //   yield put(changeEmail(action.email));
  // } catch (err) {
  //   yield put(repoLoadingError(err));
  // }

  const userData = yield select(makeSelectLoginPage());

  const token = yield call(LoginApi.authenticate(userData.email, userData.password), '');

  if(token){

    const completeUser = yield call(UserApi.getByEmail({...userData, token}), '');

    try{
      yield put(loginSuccess({...completeUser, token}));
    } catch(err) {
      yield put(authFailed());
    }

    yield put(redirect(token));
  } else {
    yield put(authFailed());
  }
}


export default function* loginPageSaga() {
  // See example in containers/HomePage/saga.js
  // export default function* appSaga() {
  //   yield all([
  //     takeLatest(CHANGE_EMAIL, vote),
  //     takeLatest(CHANGE_PASSWORD, deletePost),
  //     takeLatest(UPDATE_POST, updatePost),
  //     takeLatest(ADD_POST, addPost),
  //   ]);
  // }
  // yield all([
  //   yield takeLatest(LOGIN_SUCCESS);
  // ])
   yield takeLatest(LOGIN, login);
}
