import React from "react";
import UserList from "../containers/user-container";
import UserDetail from "../containers/user-details";

export class User extends React.Component {

    render() {
        return (
            <div>
                <h1>Users List</h1>
                <UserList />
                <hr/>
                <h1>Users Details</h1>
                <UserDetail />
            </div>
        );
    }
}