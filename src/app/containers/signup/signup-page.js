import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions.js';
import { SignUpForm } from '../../components/signup/signup-form';

export class SignUpPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signupData: { data: [] },
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            info: {},
            formErrors: {}
        }


    }

    handleChange = (event) => {        
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        this.setState(
            Object.assign({}, this.state, {
                formErrors: {}
            })
        )
        event.preventDefault();
        this.props.onSubmit(this.state);
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
                <div className="col-md-4 col-md-offset-4">
                    <SignUpForm
                        submitHandle={this.handleSubmit}
                        handleChange={this.handleChange}
                        formError={this.props.signupData.info}
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

/*export default connect(mapStateToProps, mapDispatchToProps)(HostPage);

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
}*/

//export default connect((state) => { return {} }, { userSignupRequest })(SignUpPage);





/*import React, { Component } from 'react';
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

export default connect((state) => { return {} }, { userSignupRequest })(SignUpPage);*/