import { takeEvery, all, fork, call } from "redux-saga/effects";
import { REQUEST_LOGIN, REQUEST_LOGOUT } from "./actions";
import { AxiosResponse } from "axios";
import * as api from "../../api/user";

function* login({ payload }: any) {
  try {
    const tokenResponse: AxiosResponse = yield call(
      api.postLogin,
      payload.id,
      payload.pw
    );
  } catch (e: any) {}
}

function* logout({ payload }: any) {}

function* myInfo({ payload }: any) {}

function* watchLogin() {
  yield takeEvery(REQUEST_LOGIN, login);
}

function* watchLogout() {
  yield takeEvery(REQUEST_LOGOUT, logout);
}

function* watchMyInfo() {
  yield takeEvery("REQUEST_MY_INFO", myInfo);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchMyInfo)]);
}
