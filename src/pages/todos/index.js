import React from "react";
import { connect } from "react-redux";
import Layout from "../../components/layout";
import Todo from "../../components/todo";
import ModalCreateTask from "../../components/modal/create-task";
import './style.css';

function Todos({ showCreateTask }) {
    return (
        <Layout>
            <h2 className="todos-title">Product Roadmap</h2>
            <div className="todos-todo-container">
                <Todo />
                <Todo />
                <Todo />
                <Todo />
            </div>
            {showCreateTask && (
                <ModalCreateTask />
            )}
        </Layout>
    );
}

const mapStateToProps = (state) => ({
    showCreateTask: state.showCreateTask,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);