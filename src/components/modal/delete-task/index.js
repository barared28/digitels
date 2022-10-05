import React from "react";
import Modal from "../../molecules/modal";
import { ReactComponent as WarningIcon } from '../../../assets/warning.svg';


function ModalDeleteTask() {
    return (
        <Modal buttonSubmit={{
            label: 'Delete',
            type: 'red',
            onClick: () => {},
        }}>
            <div className="flex gap-15" style={{ maxWidth: '350px' }}>
                <div>
                    <WarningIcon />
                </div>
                <div>
                    <p className="text-lg font-bold">Delete Task</p>
                    <p className="text-md mt-8">
                        Are you sure want to delete this task? your action can’t be reverted.
                    </p>
                </div>
            </div>
        </Modal>
    );
}

export default ModalDeleteTask;