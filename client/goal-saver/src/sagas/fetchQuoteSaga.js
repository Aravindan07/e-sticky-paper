import { call, takeLatest, put } from "redux-saga/effects";
import Axios from "axios";
import { LOAD_QUOTE } from "../constants";
import { setQuotes, ErrorMessage } from "../actions";

function* loadQuoteSaga(action) {
  const requestURL = "https://api.quotable.io/random";
  try {
    const uri = requestURL;
    const result = yield call(Axios.get, uri);
    yield put(setQuotes(result.data));
  } catch (error) {
    yield put(ErrorMessage(error));
  }
}

export default function* watchQuoteLoad() {
  yield takeLatest(LOAD_QUOTE, loadQuoteSaga);
}
