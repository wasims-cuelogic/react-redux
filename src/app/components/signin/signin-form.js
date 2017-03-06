import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';


class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
    }


    render() {        

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Sign In</h1>                

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg" > Submit </button>
                </div>
            </form>
        );
    }
}

SignInForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignInForm;