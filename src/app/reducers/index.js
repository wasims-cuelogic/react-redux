import { combineReducers } from 'redux';
import UserReducer from "./reducer-users";
import ActiveUserReducer from "./reducer-active-user";
import { signupInfo } from "./signup-reducer";

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    signupData: signupInfo,
});

export default allReducers
