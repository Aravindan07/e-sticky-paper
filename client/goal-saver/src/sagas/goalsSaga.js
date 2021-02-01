import { call, takeLatest, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import Axios from "axios";
import {
  ADD_MAIN_GOAL_NAME,
  CREATE_CHILD_GOAL,
  CREATE_GOAL,
  DELETE_CHILD_GOAL,
  DELETE_ENTIRE_GOAL,
  DELETE_GOAL,
  MARK_CHECKED,
} from "../constants";
import {
  clearError,
  closeModal,
  ErrorMessage,
  goalSuccess,
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

function* addMainGoalNameSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    goalName: action.goalName,
  });
  const apiCall = () => {
    return Axios.put(
      `https://e-sticky-paper-c58a25.asia1.kinto.io/api/users/${action.userId}/goal/goal-name`,
      body,
      TokenConfig()
    )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (err.response) {
          return err;
        }
      });
  };
  try {
    const result = yield call(apiCall);
    if (result.status) {
      yield put(goalSuccess(result));
      yield put(closeModal());
      yield put(push(`/user/${action.userId}/goals`));
      return;
    }
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    yield put(ErrorMessage(error));
  }
}

function* createGoalSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    goalName: action.goalName,
    goalId: action.goalId,
  });
  const apiCall = () => {
    return Axios.put(
      `https://e-sticky-paper-c58a25.asia1.kinto.io/api/users/${action.userId}/goal/:${action.goalId}/add-sub-goal`,
      body,
      TokenConfig()
    )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (err.response) {
          return err;
        }
      });
  };
  try {
    const result = yield call(apiCall);
    if (result.status) {
      yield put(goalSuccess(result));
      yield put(closeModal());
      return;
    }
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    yield put(ErrorMessage(error));
  }
}

function* createChildGoalSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    goalId: action.goalId,
    subGoalId: action.subGoalId,
    children: action.children,
  });
  const apiCall = () => {
    return Axios.put(
      `https://e-sticky-paper-c58a25.asia1.kinto.io/api/users/${action.userId}/goal/:${action.goalId}/${action.subGoalId}/add-child-goal`,
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
      yield put(goalSuccess(result));
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

function* deleteEntireGoalSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    goalId: action.goalId,
  });
  const apiCall = () => {
    return Axios.put(
      `https://e-sticky-paper-c58a25.asia1.kinto.io/api/users/${action.userId}/goal/${action.goalId}/delete`,
      body,
      TokenConfig()
    )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (err.response) {
          return err;
        }
      });
  };
  try {
    const result = yield call(apiCall);
    if (result.status) {
      yield put(goalSuccess(result));
      yield put(SuccessMessage(result.message));
      yield put(closeModal());
      return;
    }
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    yield put(ErrorMessage(error));
  }
}

function* deleteGoalSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    goalId: action.goalId,
    subGoalId: action.subGoalId,
  });
  const apiCall = () => {
    return Axios.put(
      `https://e-sticky-paper-c58a25.asia1.kinto.io/api/users/${action.userId}/goal/${action.goalId}/${action.subGoalId}/delete`,
      body,
      TokenConfig()
    )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (err.response) {
          return err;
        }
      });
  };
  try {
    const result = yield call(apiCall);
    if (result.status) {
      yield put(goalSuccess(result));
      yield put(SuccessMessage(result.message));
      yield put(closeModal());
      return;
    }
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    yield put(ErrorMessage(error));
  }
}

function* deleteChildSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    goalId: action.goalId,
    subGoalId: action.subGoalId,
    childId: action.childId,
  });
  const apiCall = () => {
    return Axios.put(
      `https://e-sticky-paper-c58a25.asia1.kinto.io/api/users/${action.userId}/goal/${action.goalId}/${action.childId}/child/delete`,
      body,
      TokenConfig()
    )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (err.response) {
          return err;
        }
      });
  };
  try {
    const result = yield call(apiCall);
    if (result.status) {
      yield put(goalSuccess(result));
      yield put(SuccessMessage(result.message));
      yield put(closeModal());
      yield put(clearError());
      return;
    }
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    yield put(ErrorMessage(error));
  }
}

function* markGoalSaga(action) {
  const body = JSON.stringify({
    userId: action.userId,
    goalId: action.goalId,
    subGoalId: action.subGoalId,
    childId: action.childId,
  });
  const apiCall = () => {
    return Axios.put(
      `https://e-sticky-paper-c58a25.asia1.kinto.io/api/users/${action.userId}/goal/${action.goalId}/${action.subGoalId}/${action.childId}/mark`,
      body,
      TokenConfig()
    )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        if (err.response) {
          return err;
        }
      });
  };
  try {
    const result = yield call(apiCall);
    if (result.status) {
      yield put(goalSuccess(result));
      yield put(SuccessMessage(result.message));
      yield put(clearError());
      return;
    }
    yield put(ErrorMessage(result.response.data.message));
    yield put(clearError());
    return;
  } catch (error) {
    yield put(ErrorMessage(error));
  }
}

export default function* watchGoals() {
  yield takeLatest(ADD_MAIN_GOAL_NAME, addMainGoalNameSaga);
  yield takeLatest(DELETE_ENTIRE_GOAL, deleteEntireGoalSaga);
  yield takeLatest(CREATE_GOAL, createGoalSaga);
  yield takeLatest(CREATE_CHILD_GOAL, createChildGoalSaga);
  yield takeLatest(DELETE_GOAL, deleteGoalSaga);
  yield takeLatest(DELETE_CHILD_GOAL, deleteChildSaga);
  yield takeLatest(MARK_CHECKED, markGoalSaga);
}
