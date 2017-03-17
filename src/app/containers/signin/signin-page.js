import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSigninRequest } from '../../actions/signinActions.js';
import { SignInForm } from '../../components/signin/signin-form';
import { browserHistory } from 'react-router'

export class SignInPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { credentials: { username: '', password: '' } }
        // this.state = {
        //     username: '',
        //     password: ''
        // }
    }

    handleChange = (event) => {

        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({ credentials: credentials });

        //this.setState({ [event.target.name]: event.target.value });

        // let valObj = {};
        // valObj[event.target.name] = event.target.value;
        // this.setState(
        //     Object.assign({}, this.state, {
        //         signinFormData: Object.assign({}, this.state.signinFormData, valObj)
        //     })
        // )
    }

    handleSubmit = (event) => {
        // this.setState(
        //     Object.assign({}, this.state, {
        //         formErrors: {}
        //     })
        // )
        event.preventDefault();
        this.props.onSubmit(this.state.credentials);
    }


    componentWillUpdate(nextProps, nextState) {

        if (nextProps.token) {
            //browserHistory.push('/dashboard');
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-2">
                    <SignInForm
                        submitHandle={this.handleSubmit}
                        handleChange={this.handleChange}
                        credentials={this.state.credentials}                         
                    />
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.error,
        message: state.auth.message,
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (userData) => {
            dispatch(userSigninRequest(userData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);