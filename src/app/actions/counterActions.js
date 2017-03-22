import * as actionTypes from "../constants/actionTypes";

export const increase = () => {
    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.INCREASE_COUNTER
        })
    }
}

export const decrease = () => {
    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.DECREASE_COUNTER
        })
    }
}