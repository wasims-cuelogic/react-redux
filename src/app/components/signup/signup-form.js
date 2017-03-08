import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';


class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''
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

        const options = map(timezones, (val, key) =>
            <option key={key} value={key}>{val}</option>
        );

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Sign Up</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter username"
                        value={this.state.username}
                        onChange={this.onChange} />
                </div>

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
                    <label className="control-label">Password Confirmation</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        className="form-control"
                        placeholder="Re-enter password "
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label className="control-label">Timezone</label>
                    <select
                        name="timezone"
                        className="form-control"
                        value={this.state.timezone}
                        onChange={this.onChange} >

                        <option value="" disabled>Chosse your timezone</option>
                        {options}
                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" > Sign Up </button>
                </div>
            </form>
        );
    }
}

SignUpForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

export default SignUpForm;