import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import Immutable from "immutable";
import allReducers from "./reducers"

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";
import SignUp from "./containers/signup/signup-page";
import SignIn from "./containers/signin/signin-page";
import DashboardComponent from "./containers/dashboard/dashboard-container";
import RequireAuth from "./components/auth/require-auth"
import createLogger from 'redux-logger';

const logger = createLogger({
    collapsed: true,
    stateTransformer: state => state.toJS()
});

// const initialState = Immutable.Map({
//     signupData: {
//          signupData: { data: [] },
//          info: {}
//     }

// });

const initialState = {
    signupData: {
        signupFormData: {},
        info: {},
        isPropUpdate: false,
        isLoading: false,
        recordAdded: false
    },
    // signinData: {
    //     signinFormData: {},
    //     info: {},
    //     isPropUpdate: false
    // },
    auth: { error: '', message: '', content: '', authenticated: false, user: {} }

};

const store = createStore(
    allReducers,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ),
    logger
);


var routes = (
    <Router history={browserHistory}>
        <Route path={"/"} component={Root} >
            <IndexRoute component={Home} />
            <Route path={"user"} component={User} />
            <Route path={"home"} component={Home} />
            <Route path={"signup"} component={SignUp} />
            <Route path={"signin"} component={SignIn} />
            <Route path={"dashboard"} component={DashboardComponent} onEnter={requireAuth} />
        </Route>
    </Router>
);

function requireAuth(nextState, replace) {
    if (!sessionStorage.token) {
        replace({
            pathname: '/signin',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

class App extends React.Component {
    render() {
        return (
            <Provider store={store} children={routes}>
            </Provider>
        )
    }
}

render(<App />, document.getElementById('app'));

