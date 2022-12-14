import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Layout from "../../components/layout";
import Todo from "../../components/todo";
import ModalCreateTask from "../../components/modal/create-task";
import { fetchDataTodos } from '../../redux/action';
import ModalDeleteTask from "../../components/modal/delete-task";
import './style.css';

function Todos({ showCreateTask, fetchTodos, todos, showDeleteTask }) {

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <Layout>
            <h2 className="todos-title">Product Roadmap</h2>
            <DndProvider backend={HTML5Backend}>
                <div className="todos-todo-container">
                    {todos.map((data, index) => (
                        <Todo data={data} key={`todo-${index}`} index={index} totalTodos={todos.length} />
                    ))}
                </div>
            </DndProvider>
            {showCreateTask && (
                <ModalCreateTask />
            )}
            {showDeleteTask && (
                <ModalDeleteTask />
            )}
        </Layout>
    );
}

const mapStateToProps = (state) => ({
    showCreateTask: state.createTask.show,
    showDeleteTask: state.deleteTask.show,
    todos: state.todos,
});

const mapDispatchToProps = {
    fetchTodos: fetchDataTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);