import React, { Component } from "react";
import { connect } from 'react-redux';
import { DashboardComponent } from '../../components/dashboard/dashboard-component';

export class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    render() {
        return (
            <div className="row">
                <DashboardComponent user={this.props.user} userData={sessionStorage.getItem('user')} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);