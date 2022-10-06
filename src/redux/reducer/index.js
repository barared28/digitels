import ACTIONS from "../types";

const initialState = {
    createTask: {
        show: false,
        id: 0,
        type: 'new',
        payload: {
            name: '',
            progress: '',
        },
        idItem: 0,
    },
    deleteTask: {
        show: true,
        idTodo: 0,
        idItem: 0,
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
                    type: payload.type,
                    payload: payload.payload,
                    idItem: payload.idItem,
                },
            };
        case ACTIONS.SET_TODOS:
            return {
                ...state,
                todos: payload,
            }
        case ACTIONS.SET_MODAL_DELETE:
            return {
                ...state,
                deleteTask: {
                    show: payload.show,
                    idTodo: payload.idTodo,
                    idItem: payload.idItem,
                }
            }
        default:
            return state;
    }
};

export default TodoReducer;