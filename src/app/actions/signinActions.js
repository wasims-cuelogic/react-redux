import * as actionTypes from "../constants/actionTypes";
import axios from 'axios';

export const userSigninRequest = (userData) => {

    return (dispatch, getState) => {

        dispatch({
            type: actionTypes.LOGIN_REQUEST
        })

        axios.post("http://localhost:3001/api/users/authenticate", userData)
            .then(response => {
                console.log("Success",response)
                dispatch({
                    type: actionTypes.LOGIN_SUCCESS,
                    data: response.id_token
                });
            })
            .catch((error) => {
                console.log("Error ",error.message)
                dispatch({
                    type: actionTypes.LOGIN_FAILURE,
                    error: error.response.data
                });
            });
    }
}