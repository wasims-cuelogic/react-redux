import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, placeholder, onChange }) => {
    return (
        <div className={classnames('form-group', { 'has-error': error })}>
            <label className="control-label">{label}</label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                name={field}
                placeholder={placeholder}
                className="form-control"
            />
            {error && <span className="help-block">{error}</span>}
        </div>);
}

TextFieldGroup.propTypes = {
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder:React.PropTypes.string
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;