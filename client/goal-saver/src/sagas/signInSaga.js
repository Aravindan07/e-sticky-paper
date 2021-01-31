import { call, takeLatest, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import Axios from "axios";
import { SIGN_IN } from "../constants";
import {
  clearError,
  closeModal,
  ErrorMessage,
  SignInSuccess,
  SuccessMessage,
} from "../actions";

export const TokenConfig = (getState) => {
  //Get token from localStorage

  const token = getState().authentication.token;

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

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

function* signinSaga({ email, password }) {
  const body = JSON.stringify({ email, password });
  const apiCall = () => {
    return Axios.post(
      "https://e-sticky-paper-c58a25.asia1.kinto.io/api/users/login",
      body,
      config
    )
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
      yield put(SignInSuccess(result));
      yield put(SuccessMessage(result.message));
      yield put(clearError());
      yield put(closeModal());
      yield put(push(`/user/${result.user.id}/goals`));
      return;
    }
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    console.log(error);
  }
}

export default function* watchSignIn() {
  yield takeLatest(SIGN_IN, signinSaga);
}
