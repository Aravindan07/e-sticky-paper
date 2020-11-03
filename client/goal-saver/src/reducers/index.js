import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import LoadQuoteReducer from "./quoteReducer";
import AuthenticationReducer from "./authenticationReducer";
import ModalReducer from "./modalReducer";
import messageReducer from "./messageReducer";
import goalReducer from "./goalReducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    modal: ModalReducer,
    quote: LoadQuoteReducer,
    authentication: AuthenticationReducer,
    message: messageReducer,
    goal: goalReducer,
  });

export default rootReducer;
