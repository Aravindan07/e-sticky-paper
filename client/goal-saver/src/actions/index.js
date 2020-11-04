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
  CREATE_GOAL,
  GOAL_SUCCESS,
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

export const createGoal = (userId, goalName) => {
  return {
    type: CREATE_GOAL,
    userId,
    goalName,
  };
};

export const goalSuccess = (payload) => {
  return {
    type: GOAL_SUCCESS,
    payload,
  };
};
