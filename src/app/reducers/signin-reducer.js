import * as actionTypes from "../constants/actionTypes.js";

export function signinInfo(state = {}, action) {    
    switch (action.type) {
        case actionTypes.SIGNUP_PAGE_SUBMITTED:
            return Object.assign({}, state, {
                isPropUpdate:false,
            });
        case actionTypes.RECORD_ADD_SUCCESS:        
            return Object.assign({}, state, {
                info: action.payload,
                data:state.data,
                isPropUpdate:false
            }); 
        case actionTypes.RECORD_ADD_FAILURE:        
            return Object.assign({}, state, {
                info: action.error.message,
                data:state.data,
                isPropUpdate:true
            });       
        default:
            return state;
    }
}