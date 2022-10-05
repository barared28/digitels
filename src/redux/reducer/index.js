import ACTIONS from "../types";

const initialState = {
    createTask: {
        show: false,
        id: 0,
    },
    deleteTask: {
        show: false,
        id: 0,
    },
    todos: [],
};

const TodoReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case ACTIONS.SET_MODAL_TASK:
            return {
                ...state,
                createTask: {
                    show: payload.show,
                    id: payload.id,
                },
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