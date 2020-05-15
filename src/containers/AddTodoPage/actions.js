import {
    DEFAULT_ACTION,
    POST_TODO_SUCCESS,
    POST_TODO_FAILED,
    GET_TODO_FAILED,
    GET_TODO_SUCCESS,
} from "./constants";
import { TODO_API } from "../../api";
import axios from "axios";

export function defaultAction() {
    return { type: DEFAULT_ACTION };
}

export const post_todo_success = (data) => {
    return {
        type: POST_TODO_SUCCESS,
        payload: data,
    };
};

export const post_todo_failed = (data) => {
    return {
        type: POST_TODO_FAILED,
        error: data,
    };
};

export function postTodo(obj) {
    return (dispatch) => {
        axios
            .post(TODO_API, obj)
            .then((response) => {
                dispatch(post_todo_success(response.data));
            })
            .catch((error) => {
                dispatch(post_todo_failed("Failed to post feedback data"));
            });
    };
}

export function getTodo() {
    return (dispatch) => {
        axios
            .get(TODO_API)
            .then((response) => {
                dispatch({
                    type: GET_TODO_SUCCESS,
                    payload: response.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_TODO_FAILED,
                });
            });
    };
}
