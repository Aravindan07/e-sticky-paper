import { CLEAR_ERROR, ERROR_MESSAGE, SUCCESS_MESSAGE } from "../constants";

const initialState = {
  error: null,
  success: null,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        ...state,
        error: action.message,
        success: null,
      };
    case SUCCESS_MESSAGE:
      return {
        ...state,
        success: action.message,
        error: null,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
        success: null,
      };
    default:
      return state;
  }
};

export default messageReducer;
