import { SET_QUOTE } from '../constants';

const initialState = {
    quote: {},
};

const loadQuoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUOTE:
            return (state.quote = action.payload);
        default:
            return state;
    }
};

export default loadQuoteReducer;
