import { call, takeLatest, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import Axios from "axios";
import { SIGN_UP } from "../constants";
import {
  clearError,
  closeModal,
  ErrorMessage,
  SignUpSuccess,
  SuccessMessage,
} from "../actions";

export const TokenConfig = (getState) => {
  //Get token from localStorage

  const token = getState().auth.token;

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

function* signupSaga({ name, email, password }) {
  const body = JSON.stringify({ name, email, password });
  const apiCall = () => {
    return Axios.post("/api/users", body, config)
      .then((response) => {
        console.log(response.data);
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
      yield put(SignUpSuccess(result));
      yield put(SuccessMessage(result.message));
      yield put(clearError());
      yield put(closeModal());
      yield put(push(`/user/${result.user.id}/create-goal`));
      return;
    }
    yield put(ErrorMessage(result.response.data.message));
    console.log(result.response.data.message);
    yield put(clearError());
    return;
  } catch (error) {
    console.log(error);
  }
}

export default function* watchQuoteLoad() {
  yield takeLatest(SIGN_UP, signupSaga);
}
