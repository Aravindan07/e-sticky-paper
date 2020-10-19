import {
  LOAD_QUOTE,
  SET_QUOTE,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  ERROR_MESSAGE,
  CLOSE_MODAL,
  OPEN_MODAL,
  SUCCESS_MESSAGE,
  CLEAR_ERROR,
} from "../constants";

export const openModal = () => {
  return {
    type: OPEN_MODAL,
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

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const SuccessMessage = (message) => {
  console.log("I am inside success");
  return { type: SUCCESS_MESSAGE, message };
};

export const ErrorMessage = (message) => {
  console.log("I am inside");
  return { type: ERROR_MESSAGE, message };
};
