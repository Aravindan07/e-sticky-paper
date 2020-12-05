import {
  LOAD_QUOTE,
  SET_QUOTE,
  LOAD_USER,
  LOADED_USER,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  ERROR_MESSAGE,
  CLOSE_MODAL,
  OPEN_MODAL,
  SUCCESS_MESSAGE,
  CLEAR_ERROR,
  LOGOUT,
  ADD_MAIN_GOAL_NAME,
  CREATE_GOAL,
  GOAL_SUCCESS,
  DELETE_GOAL,
  DELETE_CHILD_GOAL,
  MARK_CHECKED,
  CREATE_CHILD_GOAL,
  DELETE_ENTIRE_GOAL,
  NOTES_SUCCESS,
  CREATE_NEW_NOTE,
  DELETE_NOTE,
} from "../constants";

export const openModal = (modalType, data) => {
  return {
    type: OPEN_MODAL,
    modalType,
    data,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const loadQuotes = () => {
  return {
    type: LOAD_QUOTE,
  };
};

export const setQuotes = (payload) => {
  return {
    type: SET_QUOTE,
    payload,
  };
};

export const loadUser = () => {
  return {
    type: LOAD_USER,
  };
};

export const loadedUser = (payload) => {
  return {
    type: LOADED_USER,
    payload,
  };
};

export const signUp = (name, email, password) => {
  return {
    type: SIGN_UP,
    name,
    email,
    password,
  };
};

export const SignUpSuccess = (payload) => {
  return { type: SIGN_UP_SUCCESS, payload };
};

export const signIn = (email, password) => {
  return {
    type: SIGN_IN,
    email,
    password,
  };
};

export const SignInSuccess = (payload) => {
  return { type: SIGN_IN_SUCCESS, payload };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const SuccessMessage = (message) => {
  return { type: SUCCESS_MESSAGE, message };
};

export const ErrorMessage = (message) => {
  return { type: ERROR_MESSAGE, message };
};

export const addMainGoalName = (userId, goalName) => {
  return {
    type: ADD_MAIN_GOAL_NAME,
    userId,
    goalName,
  };
};

export const createGoal = (userId, goalName, goalId) => {
  return {
    type: CREATE_GOAL,
    userId,
    goalName,
    goalId,
  };
};

export const createChildGoal = (userId, goalId, subGoalId, child) => {
  return {
    type: CREATE_CHILD_GOAL,
    userId,
    goalId,
    subGoalId,
    children: {
      child: child,
    },
  };
};

export const deleteEntireGoal = (userId, goalId) => {
  return {
    type: DELETE_ENTIRE_GOAL,
    userId,
    goalId,
  };
};

export const deleteGoal = (userId, goalId, subGoalId) => {
  return {
    type: DELETE_GOAL,
    userId,
    goalId,
    subGoalId,
  };
};

export const deleteChildGoal = (userId, goalId, subGoalId, childId) => {
  return {
    type: DELETE_CHILD_GOAL,
    userId,
    goalId,
    subGoalId,
    childId,
  };
};

export const markChecked = (userId, goalId, subGoalId, childId) => {
  return {
    type: MARK_CHECKED,
    userId,
    goalId,
    subGoalId,
    childId,
  };
};

export const goalSuccess = (payload) => {
  return {
    type: GOAL_SUCCESS,
    payload,
  };
};

export const NotesSuccess = (payload) => {
  return {
    type: NOTES_SUCCESS,
    payload,
  };
};

export const createNewNote = (userId, name) => {
  return {
    type: CREATE_NEW_NOTE,
    userId,
    name,
  };
};

export const deleteNote = (userId, noteId) => {
  return {
    type: DELETE_NOTE,
    userId,
    noteId,
  };
};
