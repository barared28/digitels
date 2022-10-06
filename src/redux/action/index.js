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

export const fetchDataTodo = (idTodos) => async (dispatch) => {
    const todosRes = await Promise.all(idTodos.map(async (idTodo) => {
        const res = await fetchTodo(idTodo);
        return { id: idTodo, items: res }
    }));
    dispatch({
        type: ACTIONS.UPDATE_TODOS,
        payload: todosRes,
    });
}

export const setLoading = (val) => async (dispatch) => {
    dispatch({
        type: ACTIONS.SET_LOADING,
        payload: val,
    });
}