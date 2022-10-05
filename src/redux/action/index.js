import ACTIONS from "../types";

export const setShowModalTask = (data) => async (dispatch) => {
    dispatch({
        type: ACTIONS.SET_MODAL_TASK,
        payload: {
            show: data,
        },
    });
};