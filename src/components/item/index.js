import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDrag } from "react-dnd";
import Progress from "../molecules/progress";
import MenuItem from "../molecules/menu-item";
import { fetchDataTodo, setShowDeleteTask, setShowModalTask } from "../../redux/action";
import API from "../../config/api";
import './style.css';

function Item(props) {
    const {
        data, setDeleteTask, setModalTask, showMoveRight,
        showMoveLeft, todos, index, fetchTodo,
    } = props
    const { name, progress_percentage: percent, todo_id: idTodo, id } = data;

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "div",
        item: { idTodo, idItem: id, name, progress: percent },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const handleDelete = () => {
        setDeleteTask({
            show: true,
            idTodo,
            idItem: id,
        })
    };

    const handleMove = async (i) => {
        const todo = todos[i];
        try {
            if (!todo) {
                throw new Error('move failed');
            }
            const targetId = todo.id
            await API.patch(`/todos/${idTodo}/items/${id}`, {
                name: data.task,
                progress_percentage: data.progress,
                target_todo_id: targetId,
            });
            fetchTodo([idTodo, targetId], todos);
        } catch (e) {
            console.log(e);
        }
    }

    const handleEdit = () => {
        setModalTask({ show: true, id: idTodo, type: 'update', payload: { name, progress: percent }, idItem: id })
    }

    return (
        <div className="item-box" ref={drag} style={{ display: isDragging ? 'none' : 'block' }}>
            <p className="font-medium item-text">{name}</p>
            <div className="item-action-container">
                <Progress percent={percent} />
                <MenuItem
                    onDelete={handleDelete}
                    onMoveRight={() => handleMove(index + 1)}
                    onMoveLeft={() => handleMove(index - 1)}
                    onEdit={handleEdit}
                    showMoveLeft={showMoveLeft}
                    showMoveRight={showMoveRight}
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
    showMoveLeft: PropTypes.bool,
    showMoveRight: PropTypes.bool,
    todos: PropTypes.array,
    index: PropTypes.number,
    fetchTodo: PropTypes.func,
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
    showMoveLeft: false,
    showMoveRight: false,
    todos: [],
    index: 0,
    fetchTodo: () => {},
}

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = {
    setDeleteTask: setShowDeleteTask,
    setModalTask: setShowModalTask,
    fetchTodo: fetchDataTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);