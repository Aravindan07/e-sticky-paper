import { SIGN_UP_SUCCESS } from '../constants';

const initialState = {
    token: localStorage.getItem('token'),
    isLoading: false,
    isAuthenticated: null,
    user: null,
};

const SignupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            console.log(action);
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default SignupReducer;
