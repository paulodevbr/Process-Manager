/**
 * Gets the object acording to the userGroup
 * If admin get users,
 * if triador get processes
 */

import {call, put, select, takeLatest, all} from 'redux-saga/effects';
import { repoLoadingError} from 'containers/App/actions';
import * as UserApi from '../../utils/userApi';
import * as ProcessApi from '../../utils/processApi';
import {createObjectSuccess, loadListSuccess} from "./actions";
import makeSelectLoginPage from "../LoginPage/selectors";
import makeSelectUserForm from "../../components/CreateUserForm/selectors";
import {clearUserForm} from "../../components/CreateUserForm/actions";
import makeSelectProcessPage from "../ProcessPage/selectors";

import {ADMIN, CREATE_OBJECT, DELETE_OBJECT, FINALIZADOR, LOAD_LIST, TRIADOR} from "./constants";
import {redirect} from "../LoginPage/actions";
import {clearProcessForm} from "../ProcessPage/actions";

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
        //TODO: implement load processes to create report
        // objects = yield call();
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

        yield put(createObjectSuccess(newObject));
        yield put(clearUserForm());
        break;

      case TRIADOR:
        const processForm = yield select(makeSelectProcessPage());
        const process = {title: processForm.title, description: processForm.description};
        newObject = yield call(ProcessApi.create, {process, token});

        yield put(createObjectSuccess(newObject));
        yield put(clearProcessForm());
        break;

      case FINALIZADOR:
        //TODO: implement create report
        break;

    }


  } catch (err) {
    console.log(err);
    yield put(clearProcessForm());
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
      //TODO: implement delete report
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
