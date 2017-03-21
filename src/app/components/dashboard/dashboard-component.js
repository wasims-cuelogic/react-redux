import React from "react";

export const DashboardComponent = (props) => {
    return (
        <div>
            <h1>Welcome, {sessionStorage.user}</h1>
        </div>
    );
}