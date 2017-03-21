import * as actionTypes from "../constants/actionTypes";
import axios from 'axios';
import cookie from 'react-cookie';

export const userSigninRequest = (userData) => {

    return (dispatch, getState) => {

        dispatch({
            type: actionTypes.UNAUTH_USER
        })

        axios.post("http://localhost:3001/api/users/authenticate", userData)
            .then(response => {
                //console.log("Success ", response.data)
                //cookie.save('token', response.data.id_token, { path: '/' });
                sessionStorage.setItem('token', response.data.id_token);
                sessionStorage.setItem('user', response.data.user.fname);
                dispatch({ type: actionTypes.AUTH_USER, token: response.data.id_token, user: response.data.user });
                // dispatch({
                //     type: actionTypes.LOGIN_SUCCESS,
                //     token: response.data.token
                // });
            })
            .catch((error) => {
                //console.log("Error ", JSON.stringify(error.message))

                errorHandler(dispatch, error.response, actionTypes.AUTH_ERROR)

                // dispatch({
                //     type: actionTypes.AUTH_ERROR,
                //     payload: error.message
                // });
            });
    }
}

export const userLogoutRequest = () => {
    return (dispatch, getState) => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');

        dispatch({ type: actionTypes.LOG_OUT });
    }
}


export function errorHandler(dispatch, error, type) {
    let errorMessage = '';

    if (error.data.error) {
        errorMessage = error.data.message;
    } else if (error.data) {
        errorMessage = error.data;
    } else {
        errorMessage = error;
    }

    if (error.status === 401) {
        dispatch({
            type: type,
            payload: 'You are not authorized to do this. Please login and try again.'
        });
        logoutUser();
    } else {
        dispatch({
            type: type,
            payload: errorMessage
        });
    }
}