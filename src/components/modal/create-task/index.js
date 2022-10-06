import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import Modal from "../../molecules/modal";
import { fetchDataTodo, setShowModalTask } from "../../../redux/action";
import API from "../../../config/api";
import './style.css';

function ModalCreateTask(props) {
    const {
        type,
        setModalTask,
        idTodo,
        fetchTodo,
        todos,
        payload,
        idItem,
    } = props;
    const ref = useRef(null);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const onSubmit = async (data) => {
        try {
            if (type === 'new') {
                await API.post(`/todos/${idTodo}/items`, {
                    name: data.task,
                    progress_percentage: data.progress,
                });
            } else if (type === 'update') {
                await API.patch(`/todos/${idTodo}/items/${idItem}`, {
                    name: data.task,
                    progress_percentage: data.progress,
                    target_todo_id: idTodo,
                });
            }
            setModalTask({ show: false, id: 0, type: 'new', payload: {} });
            fetchTodo(idTodo, todos);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (type === 'update') {
            setValue('task', payload.name || '');
            setValue('progress', payload.progress || 0);
        }
    }, [type])

    return (
        <Modal
            buttonSubmit={{
                label: 'Save Task',
                type: 'green',
                onClick: () => ref.current.click(),
            }}
            handleCancel={() => setModalTask({ show: false, id: 0 })}
        >
            <div style={{ minWidth: '400px' }}>
                <p className="text-lg font-bold mb-20">{`${type === 'new' ? 'Create' : 'Update'} Task`}</p>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex-col">
                        <label className="label" htmlFor="task" >Task Name</label>
                        <input
                            className="input"
                            id="task"
                            {...register("task", { required: true })}
                            placeholder="example: Build rocket to Mars."
                        />
                        {errors.task && <p className="text-error">This field is required</p>}
                    </div>
                    <div className="flex-col">
                        <label className="label" htmlFor="progress">Progress</label>
                        <input
                            className="input progress-input"
                            id="progress"
                            type="number"
                            {...register("progress", {
                                required: true,
                                valueAsNumber: true,
                                min: 0,
                                max: 100,
                            })}
                            placeholder="0%"
                        />
                        {errors.progress && errors.progress.type && (
                            <>
                                {errors.progress.type === 'required' && <p className="text-error">This field is required</p>}
                                {errors.progress.type === 'min' && <p className="text-error">This field minimum is 0</p>}
                                {errors.progress.type === 'max' && <p className="text-error">This field maximum is 100</p>}
                            </>
                        )}
                        <input ref={ref} style={{ display: 'none' }} type="submit" />
                    </div>
                </form>
            </div>
        </Modal>
    );
}

ModalCreateTask.propTypes = {
    type: PropTypes.string,
    setModalTask: PropTypes.func,
    idTodo: PropTypes.number,
    payload: PropTypes.shape({
        name: PropTypes.string,
        progress: PropTypes.number,
    }),
    idItem: PropTypes.number,
}

ModalCreateTask.defaultProps = {
    type: '',
    setModalTask: () => {},
    idTodo: 0,
    payload: {
        name: '',
        progress: 0,
    },
    idItem: 0,
}

const mapStateToProps = (state) => ({
    idTodo: state.createTask.id,
    idItem: state.createTask.idItem,
    type: state.createTask.type,
    payload: state.createTask.payload,
    todos: state.todos,
});

const mapDispatchToProps = {
    setModalTask: setShowModalTask,
    fetchTodo: fetchDataTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateTask);