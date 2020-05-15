import {
    DEFAULT_ACTION,
    POST_TODO_SUCCESS,
    POST_TODO_FAILED,
    GET_TODO_FAILED,
    GET_TODO_SUCCESS,
} from "./constants";

const initialState = {
    success: false,
    todos: [],
};

function addTodoPageReducer(state = initialState, action) {
    switch (action.type) {
        case DEFAULT_ACTION:
            return state;
        case POST_TODO_SUCCESS:
            return { ...state, success: true };
        case POST_TODO_FAILED:
            return { ...state, success: false };
        case GET_TODO_SUCCESS:
            return { ...state, success: true, todos: action.payload };
        case GET_TODO_FAILED:
            return { ...state, success: false };
        default:
            return state;
    }
}

export default addTodoPageReducer;
