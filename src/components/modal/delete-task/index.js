import React from "react";
import { connect } from "react-redux";
import Modal from "../../molecules/modal";
import { ReactComponent as WarningIcon } from '../../../assets/warning.svg';
import { fetchDataTodo, setLoading, setShowDeleteTask } from "../../../redux/action";
import API from "../../../config/api";


function ModalDeleteTask(props) {
    const { idTodo, idItem, setDeleteTask, fetchTodo, todos, setLoad, isLoading } = props;

    const handleClose = () => {
        setDeleteTask({ show: false, idTodo: 0, idItem: 0 });
    };

    const handleDelete = async () => {
        try {
            setLoad(true);
            await API.delete(`/todos/${idTodo}/items/${idItem}`);
            handleClose();
            fetchTodo([idTodo], todos);
        } catch (e) {
            console.log(e);
        } finally {
            setLoad(false);
        }
    };

    return (
        <Modal
            buttonSubmit={{
                label: 'Delete',
                type: 'red',
                onClick: () => handleDelete(),
            }}
            handleCancel={handleClose}
            isLoading={isLoading}
        >
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

const mapStateToProps = (state) => ({
    idTodo: state.deleteTask.idTodo,
    idItem: state.deleteTask.idItem,
    todos: state.todos,
    isLoading: state.isLoading,
});

const mapDispatchToProps = {
    setDeleteTask: setShowDeleteTask,
    fetchTodo: fetchDataTodo,
    setLoad: setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteTask);