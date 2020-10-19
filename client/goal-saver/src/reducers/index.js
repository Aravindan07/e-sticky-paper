import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import LoadQuoteReducer from "./quoteReducer";
import SignupReducer from "./signupReducer";
import ModalReducer from "./modalReducer";
import messageReducer from "./messageReducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    modal: ModalReducer,
    quote: LoadQuoteReducer,
    signup: SignupReducer,
    message: messageReducer,
  });

export default rootReducer;
