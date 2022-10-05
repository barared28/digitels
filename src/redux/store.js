import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

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

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store