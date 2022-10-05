import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tag from "../molecules/tag";
import Item from "../item";
import ItemEmpty from "../item/empty";
import { ReactComponent as AddIcon } from '../../assets/add.svg';
import { setShowModalTask } from "../../redux/action";
import './style.css';

const COLOR = ['magenta', 'purple', 'geekblue', 'green'];

function Todo({ setModalTask, data, index }) {
    console.log(data);
    const { title, desc, items } = data;
    const color = COLOR[index % 4];
    return (
        <div
            className="todo-container"
            style={{ backgroundColor: `var(--${color}-light)`, border: `1px solid var(--${color})` }}
        >
            <div className="flex">
                <Tag text={title} color={color} />
            </div>
            <p className="font-medium mt-4">{desc}</p>
            <div className="todo-item-container">
                {items.length > 0
                    ? items.map(() => (<Item />))
                    : <ItemEmpty />
                }
            </div>
            <div>
                <button
                    className="btn-add-task"
                    onClick={() => setModalTask(true)}
                >
                    <AddIcon />
                    New Task
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    setModalTask: setShowModalTask,
};

Todo.propTypes = {
    setModalTask: PropTypes.func,
    data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        desc: PropTypes.string,
        items: PropTypes.arrayOf({}),
    }),
    index: PropTypes.number,
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);