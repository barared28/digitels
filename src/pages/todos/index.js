import React from "react";
import Layout from "../../components/layout";
import Todo from "../../components/todo";

import './style.css';

function Todos() {
    return (
        <Layout>
            <h2 className="todos-title">Product Roadmap</h2>
            <div className="todos-todo-container">
                <Todo />
                <Todo />
                <Todo />
                <Todo />
            </div>
        </Layout>
    );
}

export default Todos;