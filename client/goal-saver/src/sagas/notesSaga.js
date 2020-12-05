import { call, takeLatest, put } from "redux-saga/effects";
// import { push } from "connected-react-router";
import Axios from "axios";
import { CREATE_NEW_NOTE, DELETE_NOTE } from "../constants";
import {
  clearError,
  closeModal,
  ErrorMessage,
  NotesSuccess,
  SuccessMessage,
} from "../actions";

export const TokenConfig = () => {
  //Get token from localStorage

  const token = localStorage.getItem("token");

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

// const config = {
//   headers: {
//     "Content-type": "application/json",
//   },
// };

function* createNoteSaga(action) {
  const body = JSON.stringify({ userId: action.userId, name: action.name });
  const apiCall = () => {
    return Axios.post(`/api/users/${action.userId}/notes`, body, TokenConfig())
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
      yield put(NotesSuccess(result));
      yield put(SuccessMessage(result.message));
      yield put(clearError());
      yield put(closeModal());
      return;
    }
    console.log(result.response.data.message);
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    console.log(error);
  }
}

function* deleteNoteSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    noteId: action.noteId,
  });
  const apiCall = () => {
    return Axios.put(
      `/api/users/${action.userId}/notes/${action.noteId}/delete`,
      body,
      TokenConfig()
    )
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
      yield put(NotesSuccess(result));
      yield put(SuccessMessage(result.message));
      yield put(clearError());
      yield put(closeModal());
      return;
    }
    console.log(result.response.data.message);
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    console.log(error);
  }
}

export default function* watchNotes() {
  yield takeLatest(CREATE_NEW_NOTE, createNoteSaga);
  yield takeLatest(DELETE_NOTE, deleteNoteSaga);
}
