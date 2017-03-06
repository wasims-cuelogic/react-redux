import React, { Component } from 'react';
import SignInForm from '../../components/signin/signin-form';
import { connect } from 'react-redux';
 import { userSignupRequest } from '../../actions/signupActions.js';

class SignInPage extends Component {
    render() {

        const { userSignupRequest } = this.props;

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignInForm userSignupRequest={userSignupRequest} />
                </div>
            </div>
        );
    }
}

SignInPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { userSignupRequest })(SignInPage);