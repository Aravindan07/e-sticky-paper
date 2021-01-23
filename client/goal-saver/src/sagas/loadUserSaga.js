import { call, takeLatest, put } from "redux-saga/effects";
import Axios from "axios";
import { LOAD_USER } from "../constants";
import {
  clearError,
  closeModal,
  ErrorMessage,
  loadedUser,
  logout,
  SuccessMessage,
} from "../actions";

export const TokenConfig = () => {
  //Get token from localStorage

  const token = localStorage.getItem("token");
  // const token = getState().authentication.token;

  //Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //If token add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

function* loadUserSaga() {
  const apiCall = () => {
    return Axios.get("/api/users/user/", TokenConfig())
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          return err;
        }
      });
  };
  try {
    const result = yield call(apiCall);
    if (result.status) {
      yield put(loadedUser(result));
      yield put(SuccessMessage(result.message));
      yield put(clearError());
      yield put(closeModal());
      return;
    }
    yield put(ErrorMessage(result.response.data.message));
    yield put(logout());
    yield put(clearError());
    return;
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLoadUser() {
  yield takeLatest(LOAD_USER, loadUserSaga);
}
