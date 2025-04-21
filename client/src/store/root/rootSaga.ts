import { all, fork } from "redux-saga/effects";
import userSaga from "../user/saga";

export default function* rootSaga() {
  yield all([
    // Add your sagas here
    fork(userSaga),
  ]);
}
