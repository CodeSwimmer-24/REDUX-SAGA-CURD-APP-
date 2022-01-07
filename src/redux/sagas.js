import { all, call, delay, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import * as types from "./actionType";
import { loadUserSuccess, loadUserError, createUserSuccess, createUserError, deleteUserSuccess, deleteUserError } from "./action";
import { creatingUserApi, deleteUserApi, loadingUserApi } from "./api";

function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadingUserApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUserSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUserError (error.response.data));
  }
}

 function* onCreateUserStartAsync({payload}) {
  try {
    const response = yield call(creatingUserApi,payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserError(error.response.data));
  }
}

 function* onDeleteUserStartAsync(userId) {
  try {
    const response = yield call(deleteUserApi,userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUserSuccess(userId));
    }
  } catch (error) {
    yield put(deleteUserError(error.response.data));
  }
}

function* onLoadUsers() {
  yield takeEvery(types.LOAD_USER_START, onLoadUsersStartAsync);
}

function* onCreateUsers() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

function* onDeleteUsers() {
  while(true){
    const {payload: userId} = yield take(types.DELETE_USER_START);
    yield call(onDeleteUserStartAsync, userId)
  }
}

const userSagas = [fork(onLoadUsers),fork(onCreateUsers),fork(onDeleteUsers)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
