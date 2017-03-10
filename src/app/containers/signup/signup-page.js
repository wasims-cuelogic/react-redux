import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions.js';
import { SignUpForm } from '../../components/signup/signup-form';
import { browserHistory } from 'react-router';

export class SignUpPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signupFormData: {},
            info: {},
            formErrors: {}
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

        let valObj = {};
        valObj[event.target.name] = event.target.value;
        this.setState(
            Object.assign({}, this.state, {
                signupFormData: Object.assign({}, this.state.signupFormData, valObj)
            })
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState(
            Object.assign({}, this.state, { formErrors: {} })
        )
        this.props.onSubmit(this.state.signupFormData);
        //browserHistory.push("/dashboard");
    }


    componentWillUpdate(nextProps, nextState) {
        nextProps.signupData && (nextProps.isPropUpdate === true) ?
            this.setState(
                Object.assign({}, this.state, {
                    formErrors: nextProps.signupData.info
                })
            ) : ""
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-2">
                    <SignUpForm
                        submitHandle={this.handleSubmit}
                        handleChange={this.handleChange}
                        formError={this.props.signupData.info}
                        isLoading={this.props.signupData.isLoading}
                    />
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        signupData: state.signupData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (userData) => {
            dispatch(userSignupRequest(userData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);