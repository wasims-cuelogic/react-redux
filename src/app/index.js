import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { createStore } from 'redux'
import { Provider } from "react-redux";
import allReducers from "./reducers"

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";
import SignUp from "./containers/signup/signup-page";
import SignIn from "./containers/signin/signin-page";
import DashboardComponent from "./components/dashboard/dashboard-component";

const store = createStore(allReducers);

var routes = (
    <Router history={browserHistory}>
        <Route path={"/"} component={Root} >
            <IndexRoute component={Home} />
            <Route path={"user"} component={User} />
            <Route path={"home"} component={Home} />
            <Route path={"signup"} component={SignUp} />
            <Route path={"signin"} component={SignIn} />
            <Route path={"dashboard"} component={DashboardComponent} />
        </Route>
    </Router>
);

class App extends React.Component {
    render() {
        return (
            <Provider store={store} children={routes}>
            </Provider>
        )
    }
}

render(<App />, document.getElementById('app'));

