import { all } from "redux-saga/effects";
import quotesSaga from "./fetchQuoteSaga";
import signupSaga from "./signupSaga";
import signInSaga from "./signInSaga";
import logoutSaga from "./logoutSaga";

export default function* rootSaga() {
  yield all([quotesSaga(), signupSaga(), signInSaga(), logoutSaga()]);
}
