import * as actionTypes from "../constants/actionTypes";
import axios from 'axios';

export const userSignupRequest = (userData) => {

    return (dispatch, getState) => {

        dispatch({
            type: actionTypes.SIGNUP_PAGE_SUBMITTED
        });

        axios.post("http://localhost:3001/api/users", userData)
            .then(response => {
                console.log("Success")
                dispatch({
                    type: actionTypes.RECORD_ADD_SUCCESS,
                    data: response.data
                });
            })
            .catch((error) => {
                console.log("Error")
                dispatch({
                    type: actionTypes.RECORD_ADD_FAILURE,
                    error: error.response.data
                });
            });
    }
}