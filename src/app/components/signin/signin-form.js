import React, { Component } from 'react';
import classnames from 'classnames';

export const SignInForm = (props) => {        

    return (
        <div>      
            {/*{console.log("Props ",props)}      */}
            <form onSubmit={props.submitHandle} id="frm-signin">
                <h1>Sign In</h1>                

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

                <div className={classnames("form-group",{'has-error':props.formError.password})}>
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={props.handleChange} />

                        {(props.formError && props.formError.password)  && <span className="help-block">{props.formError.password}</span>}
                </div>

                
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" > Sign In </button>
                </div>
            </form>
        </div>
    );

}


SignInForm.propTypes = {
    submitHandle: React.PropTypes.func,
    handleChange: React.PropTypes.func,
};