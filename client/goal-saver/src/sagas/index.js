import { all } from "redux-saga/effects";
import quotesSaga from "./fetchQuoteSaga";
import signupSaga from "./signupSaga";
import signInSaga from "./signInSaga";
import logoutSaga from "./logoutSaga";
import loadUserSaga from "./loadUserSaga";

export default function* rootSaga() {
  yield all([
    loadUserSaga(),
    quotesSaga(),
    signupSaga(),
    signInSaga(),
    logoutSaga(),
  ]);
}
