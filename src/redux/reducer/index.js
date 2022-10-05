import ACTIONS from "../types";

const initialState = {
    showCreateTask: false,
    showDeleteTask: false,
    todos: [],
};

const TodoReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case ACTIONS.SET_MODAL_TASK:
            return {
                ...state,
                showCreateTask: payload.show,
            };
        case ACTIONS.SET_TODOS:
            return {
                ...state,
                todos: payload,
            }
        default:
            return state;
    }
};

export default TodoReducer;