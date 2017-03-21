import React from "react";
import { Link } from "react-router";
import { connect } from 'react-redux';
import { userLogoutRequest } from '../actions/signinActions.js';

class Header extends React.Component {

    constructor(props) {
        super();
        this.logOut = this.logOut.bind(this);
    }

    logOut(event) {
        event.preventDefault();        
        this.props.logOutUser();
    }

    render() {
        if (sessionStorage.token) {
            return (
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li><Link to={"/home"}>Home</Link></li>
                                <li><Link to={"/dashboard"}>Dashboard</Link></li>
                                <li><Link onClick={this.logOut}>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            );
        }
        else {
            return (
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li><Link to={"/home"}>Home</Link></li>
                                <li><Link to={"/user"}>Users</Link></li>
                                <li><Link to={"/dashboard"}>Dashboard</Link></li>
                                <li><Link to={"/signup"}>Sign Up</Link></li>
                                <li><Link to={"/signin"}>Sign In</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            );
        }
    }
}


const mapStateToProps = (state) => {
    return {
        logged_in: sessionStorage.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOutUser: () => {
            dispatch(userLogoutRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);