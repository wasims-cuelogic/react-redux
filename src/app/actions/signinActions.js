import * as actionTypes from "../constants/actionTypes";
import axios from 'axios';

export const userSigninRequest = (userData) => {    

    return (dispatch, getState) => {

        dispatch({
            type: actionTypes.SIGNIN_PAGE_SUBMITTED
        })

        return axios.post("http://localhost:3001/api/users/authenticate", userData)
            .then(response => {
                dispatch({
                    type: actionTypes.RECORD_ADD_SUCCESS,
                    data: response
                });
            })
            .catch(error => {   
                console.log("errors ", error.response.data)        
                dispatch({
                    type: actionTypes.RECORD_ADD_FAILURE,
                    error: error.response.data
                });
            });
    }
}