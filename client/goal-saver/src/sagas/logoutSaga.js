import { takeLatest, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { LOGOUT } from "../constants";
import { closeModal, SuccessMessage } from "../actions";

function* logoutSaga() {
  yield put(SuccessMessage("User logged out successfully"));
  yield put(closeModal());
  yield put(push(`/`));
  return;
}

export default function* watchLogout() {
  yield takeLatest(LOGOUT, logoutSaga);
}
