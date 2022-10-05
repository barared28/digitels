import ACTIONS from "../types";
import API from "../../config/api";

export const setShowModalTask = (data) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_MODAL_TASK,
        payload: {
            show: data,
        },
    });
};

export const fetchDataTodos = () => async (dispatch) => {
    try {
        const res = await API.get('/todos');
        const todos = await Promise.all(res.data.map(async (val) => {
            const resItem = await API.get(`/todos/${val.id}/items`);
            return {
                id: val.id,
                desc: val.description,
                title: val.title,
                items: resItem.data,
            }
        }));
        dispatch({
            type: ACTIONS.SET_TODOS,
            payload: todos,
        })
    } catch (e) {

    }
}