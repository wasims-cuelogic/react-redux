import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';
import TextFieldGroup from '../common/TextFieldGroup';

export const SignUpForm = (props) => {

    const options = map(timezones, (val, key) =>
        <option key={key} value={key}>{val}</option>
    );

    return (
        <div>
            {/*{console.log("Props ",props)}      */}
            <form onSubmit={props.submitHandle} id="frm-signup">
                <h1>Sign Up</h1>

                <TextFieldGroup
                    error={props.formError.fname}
                    label="First Name"
                    onChange={props.handleChange}                    
                    field="fname"
                    placeholder="First Name"
                />
                <TextFieldGroup
                    error={props.formError.lname}
                    label="Last Name"
                    onChange={props.handleChange}                    
                    field="lname"
                    placeholder="Last Name"
                />
                <TextFieldGroup
                    error={props.formError.username}
                    label="Username"
                    onChange={props.handleChange}                    
                    field="username"
                    placeholder="Username"
                />
                <TextFieldGroup
                    error={props.formError.email}
                    label="Email"
                    onChange={props.handleChange}                    
                    field="email"
                    placeholder="Email"
                />
                <TextFieldGroup
                    error={props.formError.password}
                    label="Password"
                    onChange={props.handleChange}
                    type="password"       
                    field="password"
                    placeholder="Password"
                />
                <TextFieldGroup
                    error={props.formError.password}
                    label="Confirm Password"
                    onChange={props.handleChange}
                    type="password"       
                    field="password"
                    placeholder="Password Confirm"
                />                

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
                    <button disabled={props.isLoading} className="btn btn-primary btn-lg" > Sign Up </button>
                </div>
            </form>
        </div>
    );

}


SignUpForm.propTypes = {
    submitHandle: React.PropTypes.func,
    handleChange: React.PropTypes.func,
};