import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSigninRequest } from '../../actions/signinActions.js';
import { SignInForm } from '../../components/signin/signin-form';

export class SignInPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signinFormData: {},            
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
                signinFormData: Object.assign({}, this.state.signinFormData, valObj)
            })
        )
    }

    handleSubmit = (event) => {
        this.setState(
            Object.assign({}, this.state, {
                formErrors: {}
            })
        )
        event.preventDefault();
        this.props.onSubmit(this.state.signinFormData);
    }


    componentWillUpdate(nextProps, nextState) {
        nextProps.signinData && (nextProps.isPropUpdate === true) ?
            this.setState(
                Object.assign({}, this.state, {
                    formErrors: nextProps.signinData.info
                })
            ) : ""
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-2">
                    <SignInForm
                        submitHandle={this.handleSubmit}
                        handleChange={this.handleChange}
                        formError={this.props.signinData.info}
                    />
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        signinData: state.signinData
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