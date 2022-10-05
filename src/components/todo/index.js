import React from "react";
import { connect } from "react-redux";
import Tag from "../molecules/tag";
import Item from "../item";
import ItemEmpty from "../item/empty";
import { ReactComponent as AddIcon } from '../../assets/add.svg';
import { setShowModalTask } from "../../redux/action";
import './style.css';

function Todo({ setModalTask }) {
    return (
        <div className="todo-container">
            <div className="flex">
                <Tag />
            </div>
            <p className="font-medium mt-4">January - March</p>
            <div className="todo-item-container">
                <ItemEmpty />
                <Item />
                <Item />
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

const mapStateToProps = () => {};

const mapDispatchToProps = {
    setModalTask: setShowModalTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);