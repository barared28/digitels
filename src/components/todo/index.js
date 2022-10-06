import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import Tag from "../molecules/tag";
import Item from "../item";
import ItemEmpty from "../item/empty";
import { ReactComponent as AddIcon } from '../../assets/add.svg';
import { fetchDataTodo, setShowModalTask } from "../../redux/action";
import API from "../../config/api";
import './style.css';

const COLOR = ['magenta', 'purple', 'geekblue', 'green'];

function Todo({ setModalTask, data, index, totalTodos, fetchTodo }) {
    const { title, desc, items, id } = data;

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => handleDropItem(item),
        collect: (monitor) => {
            const res = monitor.getItem();
            return { isOver: !!monitor.isOver() && res.idTodo !== id }
        },
    }));

    const handleDropItem = async (item) => {
        if (item.idTodo === id) {
            return;
        }

        try {
            await API.patch(`/todos/${item.idTodo}/items/${item.idItem}`, {
                name: data.task,
                progress_percentage: data.progress,
                target_todo_id: id,
            });
            fetchTodo([item.idTodo, id]);
        } catch (e) {
            console.log(e)
        }
    }

    const color = COLOR[index % 4];
    const showMoveLeft = index > 0;
    const showMoveRight = index < (totalTodos - 1);
    return (
        <div>
            <div
                className="todo-container"
                style={{ backgroundColor: `var(--${color}-light)`, border: `1px solid var(--${color})` }}
                ref={drop}
            >
                <div className="flex">
                    <Tag text={title} color={color} />
                </div>
                <p className="font-medium mt-4">{desc}</p>
                <div className="todo-item-container">
                    {items.length > 0
                        ? items.map((val, i) => (
                            <Item
                                data={val}
                                key={i}
                                index={index}
                                showMoveLeft={showMoveLeft}
                                showMoveRight={showMoveRight}
                            />
                        ))
                        : <ItemEmpty />
                    }
                    {isOver && (
                        <div className="drop-here-box">
                            <p className="font-medium drop-here-text">Drop Here</p>
                        </div>
                    )}
                </div>
                <div>
                    <button
                        className="btn-add-task"
                        onClick={() => setModalTask({ show: true, id, type: 'new', payload: {}, idItem: 0 })}
                    >
                        <AddIcon />
                        New Task
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    setModalTask: setShowModalTask,
    fetchTodo: fetchDataTodo,
};

Todo.propTypes = {
    setModalTask: PropTypes.func,
    data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        desc: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape),
    }),
    index: PropTypes.number,
    totalTodos: PropTypes.number,
    fetchTodo: PropTypes.func,
}

Todo.defaultProps = {
    setModalTask: () => {},
    data: {
        id: 0,
        title: '',
        desc: '',
        items: [],
    },
    index: 0,
    totalTodos: 0,
    fetchTodo: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);