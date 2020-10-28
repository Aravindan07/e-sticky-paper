import { LOGOUT, SIGN_IN_SUCCESS, SIGN_UP_SUCCESS } from "../constants";

const initialState = {
  token: localStorage.getItem("token"),
  isLoading: false,
  isAuthenticated: null,
  user: null,
};

const AuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      console.log(action);
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case SIGN_IN_SUCCESS:
      console.log(action);
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
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
