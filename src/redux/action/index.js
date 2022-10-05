import ACTIONS from "../types";
import { fetchAllTodo } from "../../service";

export const setShowModalTask = (data) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_MODAL_TASK,
        payload: {
            show: data,
        },
    });
};

export const fetchDataTodos = () => async (dispatch) => {
    const res = await fetchAllTodo();
    dispatch({
        type: ACTIONS.SET_TODOS,
        payload: res,
    });
}