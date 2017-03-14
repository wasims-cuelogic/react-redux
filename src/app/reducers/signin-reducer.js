import * as actionTypes from "../constants/actionTypes.js";

export function signinInfo(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            });
        case actionTypes.LOGIN_SUCCESS:        
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                id_token: data.id_token
            });
        case actionTypes.LOGIN_FAILURE:
            return Object.assign({}, state, {
                type: LOGIN_FAILURE,
                isFetching: false,
                isAuthenticated: false,
                message: state.errors
            });
        default:
            return state;
    }
}