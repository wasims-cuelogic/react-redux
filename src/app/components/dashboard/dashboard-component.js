import React from "react";
import Dashboard from "../../containers/dashboard/dashboard-container";
import UserDetail from "../../containers/user-details";

export class DashboardComponent extends React.Component {

    render() {
        return (
            <div>
                <h1>Users List</h1>
                <Dashboard />
                <hr/>
                <h1>Users Details</h1>
                <UserDetail />
            </div>
        );
    }
}