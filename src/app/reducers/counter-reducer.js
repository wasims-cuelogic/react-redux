import * as actionTypes from "../constants/actionTypes.js";

const INITIAL_STATE = 0;

export function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            return state + 1;
        case actionTypes.DECREASE_COUNTER:
            return state - 1;
        default:
            return state;
    }
}