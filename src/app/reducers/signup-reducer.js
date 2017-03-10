import * as actionTypes from "../constants/actionTypes.js";

export function signupInfo(state = {}, action) {
    switch (action.type) {
        case actionTypes.SIGNUP_PAGE_SUBMITTED:
            return Object.assign({}, state, {
                isPropUpdate: false,
                isLoading: true
            });
        case actionTypes.RECORD_ADD_SUCCESS:
            return Object.assign({}, state, {
                info: action.payload,
                data: state.data,
                isPropUpdate: false,
                isLoading: false,
            });
        case actionTypes.RECORD_ADD_FAILURE:
            return Object.assign({}, state, {
                info: action.error.message,
                data: state.data,
                isPropUpdate: true,
                isLoading: false,
            });
        default:
            return state;
    }
}