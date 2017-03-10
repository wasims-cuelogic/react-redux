import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';

export const SignUpForm = (props) => {

    const options = map(timezones, (val, key) =>
        <option key={key} value={key}>{val}</option>
    );    

    return (
        <div>
            {/*{console.log("props123==>", props)}*/}
            <form onSubmit={props.submitHandle} id="frm-signup">
                <h1>Sign Up</h1>
                <div className={classnames("form-group",{'has-error':props.formError.username})}>
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter username"
                        onChange={props.handleChange} />
                </div>

                <div className={classnames("form-group",{'has-error':props.formError.email})}>
                    <label className="control-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={props.handleChange} />
                        {(props.formError && props.formError.email)  && <span className="help-block">{props.formError.email}</span>}
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={props.handleChange} />
                </div>

                <div className="form-group">
                    <label className="control-label">Password Confirmation</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        className="form-control"
                        placeholder="Re-enter password "
                        onChange={props.handleChange} />
                </div>

                <div className="form-group">
                    <label className="control-label">Timezone</label>
                    <select
                        name="timezone"
                        className="form-control"
                        onChange={props.handleChange} >

                        <option value="" disabled>Chosse your timezone</option>
                        {options}
                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" > Sign Up </button>
                </div>
            </form>
        </div>
    );

}


SignUpForm.propTypes = {
    submitHandle: React.PropTypes.func,
    handleChange: React.PropTypes.func,
};
/*class SignUpForm extends Component {
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
        this.props.userSignupRequest(this.state).then(() => {
            //dispatch(getStuffSuccess(response))
            console.log("Success ");
        },
            ({ data }) => {
                console.log("Error " + data);
            })
            .catch((err) => {
                console.log("Error " + err);
                //dispatch(getStuffError(err))
            })
    }


    render() {

        const options = map(timezones, (val, key) =>
            <option key={key} value={key}>{val}</option>
        );

        return (
            <form onSubmit={this.onSubmit} id="frm-signup">
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

export default SignUpForm;*/

/*import React, { Component } from 'react';
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
        this.props.userSignupRequest(this.state).then(() => {
            //dispatch(getStuffSuccess(response))
            console.log("Success ");
        },
            ({ data }) => {
                console.log("Error " + data);
            })
            .catch((err) => {
                console.log("Error " + err);
                //dispatch(getStuffError(err))
            })
    }


    render() {

        const options = map(timezones, (val, key) =>
            <option key={key} value={key}>{val}</option>
        );

        return (
            <form onSubmit={this.onSubmit} id="frm-signup">
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

export default SignUpForm;*/