import { all, call, delay, fork, put, takeEvery } from "redux-saga/effects";
import * as types from "./actionType";
import { loadUserSuccess, loadUserError } from "./action";
import { loadingUserApi } from "./api";

export function* onLoadUsersStartAsync() {
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

export function* onLoadUsers() {
  yield takeEvery(types.LOAD_USER_START, onLoadUsersStartAsync);
}

const userSagas = [fork(onLoadUsers)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
