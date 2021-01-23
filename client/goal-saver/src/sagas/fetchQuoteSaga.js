import { call, takeLatest, put } from "redux-saga/effects";
import Axios from "axios";
import { LOAD_QUOTE } from "../constants";
import { setQuotes } from "../actions";

function* loadQuoteSaga(action) {
  const requestURL = "http://quotes.stormconsultancy.co.uk/random.json";
  try {
    const uri = requestURL;
    const result = yield call(Axios.get, uri);
    yield put(setQuotes(result));
  } catch (error) {
    console.log(error);
  }
}

export default function* watchQuoteLoad() {
  yield takeLatest(LOAD_QUOTE, loadQuoteSaga);
}
