import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Button(props) {
    const { label, onClick, type } = props;
    return (
        <button
            onClick={onClick}
            className={`btn btn-${type}`}
        >
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
}

Button.defaultProps = {
    label: '',
    onClick: () => {},
    type: 'cancel',
}

export default Button;