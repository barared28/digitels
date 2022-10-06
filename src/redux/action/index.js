import ACTIONS from "../types";
import { fetchAllTodo, fetchTodo } from "../../service";

export const setShowModalTask = (data) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_MODAL_TASK,
        payload: data,
    });
};

export const setShowDeleteTask = (data) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_MODAL_DELETE,
        payload: data,
    });
};

export const fetchDataTodos = () => async (dispatch) => {
    const res = await fetchAllTodo();
    dispatch({
        type: ACTIONS.SET_TODOS,
        payload: res,
    });
}

export const fetchDataTodo = (idTodos, todos) => async (dispatch) => {
    const todosRes = await Promise.all(idTodos.map(async (idTodo) => {
        const res = await fetchTodo(idTodo);
        return { id: idTodo, items: res }
    }));
    console.log(todosRes);
    const newTodos = [...todos];
    todosRes.forEach((val) => {
        const find = newTodos.findIndex(({ id }) => id === val.id);
        if (find > -1) {
            newTodos[find] = { ...newTodos[find], items: val.items };
            console.log(find, val);
        }
    });
    dispatch({
        type: ACTIONS.SET_TODOS,
        payload: newTodos,
    });
}