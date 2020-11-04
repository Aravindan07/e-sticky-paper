import {
  LOGOUT,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  LOAD_USER,
  LOADED_USER,
  GOAL_SUCCESS,
} from "../constants";

const initialState = {
  token: localStorage.getItem("token"),
  isLoading: false,
  isAuthenticated: null,
  user: null,
};

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        isLoading: true,
      };
    case LOADED_USER:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case SIGN_UP_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case SIGN_IN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case GOAL_SUCCESS:
      state.user.goals = action.payload.goals;
      console.log(state);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default AuthenticationReducer;
