import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

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
        show: false,
        idTodo: 0,
        idItem: 0,
    },
    todos: [],
    isLoading: false,
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store