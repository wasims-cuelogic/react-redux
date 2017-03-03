import React, { Component } from 'react';
import SignUpForm from '../../components/signup/signup-form';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions.js';

class SignUpPage extends Component {
    render() {

        const { userSignupRequest } = this.props;

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignUpForm userSignupRequest={userSignupRequest} />
                </div>
            </div>
        );
    }
}

SignUpPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { userSignupRequest })(SignUpPage);