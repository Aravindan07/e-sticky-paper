import { call, takeLatest, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import Axios from "axios";
import {
  CREATE_GOAL,
  DELETE_CHILD_GOAL,
  DELETE_GOAL,
  MARK_CHECKED,
  SIGN_IN,
  SUCCESS_MESSAGE,
} from "../constants";
import {
  clearError,
  closeModal,
  ErrorMessage,
  goalSuccess,
  SignInSuccess,
  SuccessMessage,
} from "../actions";

export const TokenConfig = () => {
  //Get token from localStorage

  // const token = getState().authentication.token;
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

function* createGoalSaga(action) {
  if (action.goalName === "") {
    return yield put(ErrorMessage("Please enter all fields"));
  }
  const body = JSON.stringify({
    userId: action.userId,
    goalName: action.goalName,
    children: action.children,
  });
  console.log(body);
  const apiCall = () => {
    return Axios.put(`/api/users/${action.userId}/goal`, body, TokenConfig())
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
      yield put(goalSuccess(result));
      console.log(result);
      yield put(closeModal());
      return;
    }
    // console.log(result.response.data.message);
    console.log(result);
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    console.log(error);
  }
}

function* deleteGoalSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    goalId: action.goalId,
  });
  console.log(body);
  const apiCall = () => {
    return Axios.put(
      `/api/users/${action.userId}/goal/${action.goalId}/delete`,
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
      yield put(goalSuccess(result));
      console.log(result);
      yield put(SuccessMessage(result.message));
      yield put(closeModal());
      return;
    }
    // console.log(result.response.data.message);
    console.log(result);
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    console.log(error);
  }
}

function* deleteChildSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    goalId: action.goalId,
    childName: action.childName,
  });
  console.log(body);
  const apiCall = () => {
    return Axios.put(
      `/api/users/${action.userId}/goal/${action.goalId}/child/delete`,
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
      yield put(goalSuccess(result));
      console.log(result);
      yield put(SuccessMessage(result.message));
      yield put(closeModal());
      yield put(clearError());
      return;
    }
    // console.log(result.response.data.message);
    console.log(result);
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    console.log(error);
  }
}

function* markGoalSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    goalId: action.goalId,
    childId: action.childId,
  });
  console.log(body);
  const apiCall = () => {
    return Axios.put(
      `/api/users/${action.userId}/goal/${action.goalId}/${action.childId}/mark`,
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
      yield put(goalSuccess(result));
      console.log(result);
      yield put(SuccessMessage(result.message));
      yield put(clearError());
      return;
    }
    // console.log(result.response.data.message);
    console.log(result);
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    console.log(error);
  }
}

export default function* watchGoals() {
  yield takeLatest(CREATE_GOAL, createGoalSaga);
  yield takeLatest(DELETE_GOAL, deleteGoalSaga);
  yield takeLatest(DELETE_CHILD_GOAL, deleteChildSaga);
  yield takeLatest(MARK_CHECKED, markGoalSaga);
}
