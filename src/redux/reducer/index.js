import ACTIONS from "../types";

const initialState = {
    showCreateTask: false,
};

const TodoReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case ACTIONS.SET_MODAL_TASK:
            return {
                ...state,
                showCreateTask: payload.show,
            }
        default:
            return state;
    }
};

export default TodoReducer;