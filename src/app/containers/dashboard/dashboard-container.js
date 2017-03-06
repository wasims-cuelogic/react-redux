import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../../actions/index";

class Dashboard extends Component {

    createListItems() {
        return this.props.users.map((user) => {
            return (
                <a key={user.id}><li onClick={() => this.props.selectUser(user)} >{user.first} {user.last}</li></a>
            );
        })
    }
    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);