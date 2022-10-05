import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import Modal from "../../molecules/modal";
import './style.css';
import { setShowModalTask} from "../../../redux/action";

function ModalCreateTask({ type, setModalTask }) {
    const ref = useRef(null);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const onSubmit = data => console.log(data);
    console.log(setModalTask);

    return (
        <Modal
            buttonSubmit={{
                label: 'Save Task',
                type: 'green',
                onClick: () => ref.current.click(),
            }}
            handleCancel={() => setModalTask(false)}
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
}

ModalCreateTask.defaultProps = {
    type: 'new',
    setModalTask: () => {},
}

const mapStateToProps = () => {};

const mapDispatchToProps = {
    setModalTask: setShowModalTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateTask);