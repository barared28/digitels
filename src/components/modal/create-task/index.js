import React from "react";
import PropTypes from "prop-types";
import Modal from "../../molecules/modal";

function ModalCreateTask({ type }) {
    return (
        <Modal
            buttonSubmit={{
                label: 'Save Task',
                type: 'green',
                onClick: () => {},
            }}
        >
            <p className="text-lg font-bold">{`${type === 'new' ? 'Create' : 'Update'} Task`}</p>
        </Modal>
    );
}

ModalCreateTask.propTypes = {
    type: PropTypes.string,
}

ModalCreateTask.defaultProps = {
    type: 'new'
}

export default ModalCreateTask;