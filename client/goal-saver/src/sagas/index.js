import { all } from "redux-saga/effects";
import quotesSaga from "./fetchQuoteSaga";
import signupSaga from "./signupSaga";
import signInSaga from "./signInSaga";

export default function* rootSaga() {
  yield all([quotesSaga(), signupSaga(), signInSaga()]);
}
