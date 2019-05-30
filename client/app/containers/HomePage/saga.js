/**
 * Gets the repositories of the user from Github
 */

import {call, put, select, takeLatest, all} from 'redux-saga/effects';
import {reposLoaded, repoLoadingError} from 'containers/App/actions';
import * as UserApi from '../../utils/userApi';
import * as ProcessApi from '../../utils/processApi';
import {ADMIN, CREATE_OBJECT, DELETE_OBJECT, FINALIZADOR, LOAD_LIST, TRIADOR} from "./constants";
import {createObjectSuccess, loadList, loadListSuccess} from "./actions";
import makeSelectLoginPage from "../LoginPage/selectors";
import makeSelectUserForm from "../../components/CreateUserForm/selectors";
import {clearUserForm} from "../../components/CreateUserForm/actions";
import makeSelectProcessPage from "../ProcessPage/selectors";

export function* loadListObjects() {
  try {
    const loginData = yield select(makeSelectLoginPage());
    const {token} = loginData;

    console.log(loginData);
    let objects;

    switch (loginData.userGroup) {
      case ADMIN:
        objects = yield call(UserApi.getAll({token}), '');
        break;
      case TRIADOR:
        objects = yield call(ProcessApi.getAll, {token});
        break;
      case FINALIZADOR:
        objects = yield call();
        break;
    }

    console.log(objects);
    yield put(loadListSuccess(objects));
  } catch (err) {
    console.log(err);
    yield put(repoLoadingError(err));
  }
}

export function* createObject(action) {

  try {

    const login = yield select(makeSelectLoginPage());
    const {token} = login;
    let newObject;

    switch (login.userGroup) {
      case ADMIN:
        const userForm = yield select(makeSelectUserForm());
        newObject = yield call(UserApi.create({user: userForm, token}), '');
        break;

      case TRIADOR:
        const processForm = yield select(makeSelectProcessPage());
        const process = {title: processForm.title, description: processForm.description};
        newObject = yield call(ProcessApi.create, {process, token});
        break;
      case FINALIZADOR:
        break;
      //TODO: implement
    }

    yield put(createObjectSuccess(newObject));

    yield put(clearUserForm());

  } catch (err) {
    console.log(err);
    yield put(repoLoadingError(err));
  }
}

export function* deleteObject(action) {
  try {

    const login = yield select(makeSelectLoginPage());
    const {token} = login;

    action = {...action, token};

    switch (login.userGroup) {
      case ADMIN:
        yield call(UserApi.remove, action);
      case TRIADOR:
        yield call(ProcessApi.remove, action);
      case FINALIZADOR:
      //TODO: implement
    }

  } catch (err) {
    console.log(err);
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield all([
    takeLatest(LOAD_LIST, loadListObjects),
    takeLatest(CREATE_OBJECT, createObject),
    takeLatest(DELETE_OBJECT, deleteObject),
  ])
}
