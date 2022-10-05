import React from "react";
import Tag from "../molecules/tag";
import Item from "../item";
import ItemEmpty from "../item/empty";
import './style.css';

function Todo() {
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
        </div>
    );
}

export default Todo;