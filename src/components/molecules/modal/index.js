import React from "react";
import PropTypes from "prop-types";
import './style.css';
import Button from "../button";

function Modal({ children, buttonCancel, buttonSubmit }) {
    return (
        <div className="modal-container">
            <div className="modal-box">
                <div>
                    {children}
                </div>
                <div className="modal-btn-group-action">
                    {buttonCancel && (
                        <Button label="Cancel" type="cancel" />
                    )}
                    {buttonSubmit && (
                        <Button label={buttonSubmit.label} type={buttonSubmit.type} onClick={buttonSubmit.onClick} />
                    )}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node,
    buttonCancel: PropTypes.bool,
    buttonSubmit: PropTypes.shape({
        label: PropTypes.string,
        type: PropTypes.string,
        onClick: PropTypes.func,
    }),
}

Modal.defaultProps = {
    children: null,
    buttonCancel: true,
    buttonSubmit: {
        label: '',
        type: '',
        onClick: () => {},
    },
}

export default Modal;