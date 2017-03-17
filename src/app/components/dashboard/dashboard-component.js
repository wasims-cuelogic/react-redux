import React from "react";

export const DashboardComponent = (props) => {
    return (
        <div>            
            <h1>Welcome, {props.user.fname}</h1>
        </div>
    );
}