import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Progress from "../molecules/progress";
import MenuItem from "../molecules/menu-item";
import { setShowDeleteTask, setShowModalTask } from "../../redux/action";
import './style.css';

function Item({ data, setDeleteTask, setModalTask }) {
    const { name, progress_percentage: percent, todo_id: idTodo, id } = data;

    const handleDelete = () => {
        setDeleteTask({
            show: true,
            idTodo,
            idItem: id,
        })
    };

    const handleEdit = () => {
        setModalTask({ show: true, id: idTodo, type: 'update', payload: { name, progress: percent }, idItem: id })
    }

    return (
        <div className="item-box">
            <p className="font-medium item-text">{name}</p>
            <div className="item-action-container">
                <Progress percent={percent} />
                <MenuItem
                    onDelete={handleDelete}
                    onMoveRight={() => {}}
                    onMoveLeft={() => {}}
                    onEdit={handleEdit}
                />
            </div>
        </div>
    );
}

Item.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        progress_percentage: PropTypes.number,
        todo_id: PropTypes.number,
        id: PropTypes.number,
    }),
    setDeleteTask: PropTypes.func,
    setModalTask: PropTypes.func,
}

Item.defaultProps = {
    data: {
        name: '',
        progress_percentage: 0,
        todo_id: 0,
        id: 0,
    },
    setDeleteTask: () => {},
    setModalTask: () => {},
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    setDeleteTask: setShowDeleteTask,
    setModalTask: setShowModalTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);