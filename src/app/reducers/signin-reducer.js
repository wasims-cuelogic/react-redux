import * as actionTypes from "../constants/actionTypes.js";
import { browserHistory } from 'react-router';


//const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false }

export function signinInfo(state = {}, action) {
    switch (action.type) {
        case actionTypes.AUTH_USER:
            //console.log("Called", action)
            browserHistory.push('/dashboard')
            return { ...state, error: '', message: '', authenticated: true, token: action.token, user: action.user };
        case actionTypes.UNAUTH_USER:
            return { ...state, authenticated: false };
        case actionTypes.AUTH_ERROR:
            //console.log("Error",action.payload)
            return { ...state, error: action.payload, isPropUpdate: true };
        case actionTypes.PROTECTED_TEST:
            return { ...state, content: action.payload };
        case actionTypes.LOG_OUT:
            browserHistory.push('/')
            return { ...state, content: action.payload };
        default:
            return state;
    }
}