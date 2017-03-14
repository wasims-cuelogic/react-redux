import * as actionTypes from "../constants/actionTypes";

export const addFlashMessage = (message) => {

    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.ADD_FLASH_MESSAGE,
            message
        })
    }
}