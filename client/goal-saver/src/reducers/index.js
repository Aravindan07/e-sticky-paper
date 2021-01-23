import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import LoadQuoteReducer from "./quoteReducer";
import AuthenticationReducer from "./authenticationReducer";
import ModalReducer from "./modalReducer";
import messageReducer from "./messageReducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    modal: ModalReducer,
    quote: LoadQuoteReducer,
    authentication: AuthenticationReducer,
    message: messageReducer,
  });

export default rootReducer;
