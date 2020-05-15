import {
    DEFAULT_ACTION,
    POST_TODO_SUCCESS,
    POST_TODO_FAILED,
    GET_TODO_FAILED,
    GET_TODO_SUCCESS,
} from "./constants";
import { TODO_API } from "../../api";

export function defaultAction() {
    return { type: DEFAULT_ACTION };
}
