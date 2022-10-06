import React from "react";
import PropTypes from "prop-types";
import Button from "../button";
import './style.css';

function Modal({ children, buttonCancel, buttonSubmit, handleCancel, isLoading }) {
    return (
        <div className="modal-container">
            <div className="modal-box">
                <div>
                    {children}
                </div>
                <div className="modal-btn-group-action">
                    {buttonCancel && (
                        <Button
                            label="Cancel"
                            type="cancel"
                            onClick={handleCancel}
                            disabled={isLoading}
                        />
                    )}
                    {buttonSubmit && (
                        <Button
                            label={buttonSubmit.label}
                            type={buttonSubmit.type}
                            onClick={buttonSubmit.onClick}
                            disabled={isLoading}
                        />
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
    handleCancel: PropTypes.func,
    isLoading: PropTypes.bool,
}

Modal.defaultProps = {
    children: null,
    buttonCancel: true,
    buttonSubmit: {
        label: '',
        type: '',
        onClick: () => {},
    },
    handleCancel: () => {},
    isLoading: false,
}

export default Modal;