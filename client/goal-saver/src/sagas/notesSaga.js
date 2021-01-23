import { call, takeLatest, put } from "redux-saga/effects";
import Axios from "axios";
import {
  CREATE_NEW_NOTE,
  DELETE_NOTE,
  EDIT_NOTE_NAME,
  SAVE_NOTE,
} from "../constants";
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

//Create a new Note
function* createNoteSaga(action) {
  const body = JSON.stringify({ userId: action.userId, name: action.name });
  const apiCall = () => {
    return Axios.post(`/api/users/${action.userId}/notes`, body, TokenConfig())
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
      yield put(NotesSuccess(result));
      yield put(SuccessMessage(result.message));
      yield put(clearError());
      yield put(closeModal());
      return;
    }
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    console.log(error);
  }
}

//Delete a Note
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
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    console.log(error);
  }
}

// Edit Note Name
function* editNoteNameSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    noteId: action.noteId,
    noteName: action.noteName,
  });
  const apiCall = () => {
    return Axios.put(
      `/api/users/${action.userId}/notes/${action.noteId}/modifyName`,
      body,
      TokenConfig()
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
      yield put(NotesSuccess(result));
      yield put(SuccessMessage(result.message));
      yield put(clearError());
      yield put(closeModal());
      return;
    }
    yield put(ErrorMessage(result.message));
    yield put(clearError());
    return;
  } catch (error) {
    console.log(error);
  }
}

// Save Note
function* saveNoteSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    noteId: action.noteId,
    newNotes: action.newNote,
  });

  const apiCall = () => {
    return Axios.put(
      `/api/users/${action.userId}/notes/${action.noteId}/edit`,
      body,
      TokenConfig()
    )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          return error;
        }
      });
  };

  try {
    const result = yield call(apiCall);
    if (result.status) {
      yield put(NotesSuccess(result));
      yield put(SuccessMessage(result.message));
      return yield put(clearError());
    }
    yield put(ErrorMessage(result.message));
    return yield put(clearError());
  } catch (error) {
    console.log(error);
  }
}

export default function* watchNotes() {
  yield takeLatest(CREATE_NEW_NOTE, createNoteSaga);
  yield takeLatest(DELETE_NOTE, deleteNoteSaga);
  yield takeLatest(EDIT_NOTE_NAME, editNoteNameSaga);
  yield takeLatest(SAVE_NOTE, saveNoteSaga);
}
