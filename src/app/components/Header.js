import React from "react";
import { Link } from "react-router";

export const Header = (props) => {

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/user"}>User</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};