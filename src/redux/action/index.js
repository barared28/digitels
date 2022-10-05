import ACTIONS from "../types";
import { fetchAllTodo, fetchTod } from "../../service";

export const setShowModalTask = (data) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_MODAL_TASK,
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

export const fetchDataTodo = (idTodo, todos) => async (dispatch) => {
    const res = await fetchTod(idTodo);
    const find = todos.findIndex(({ id }) => id === idTodo);
    if (find > -1) {
        const newTodos = [...todos];
        newTodos[find] = { ...newTodos[find], items: res };
        dispatch({
            type: ACTIONS.SET_TODOS,
            payload: newTodos,
        });
    }
}