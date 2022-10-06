import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Button(props) {
    const { label, onClick, type, disabled } = props;
    return (
        <button
            onClick={onClick}
            className={`btn btn-${type} ${disabled ? 'cursor-disable' : ''}`}
            disabled={disabled}
        >
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    label: '',
    onClick: () => {},
    type: 'cancel',
    disabled: false,
}

export default Button;