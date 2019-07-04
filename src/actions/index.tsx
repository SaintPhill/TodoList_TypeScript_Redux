import * as constants from '../constants';
//define action interfaces
interface AddTodo {
    type: constants.ADD_TODO
    payload: {
        text: string,
        id: number
    }
}

export interface DeleteTodo{
    type: constants.DELETE_TODO;
    payload: {
        id: number
    }
}

export interface EditTodo {
    type: constants.EDIT_TODO;
    payload: {
        id: number;
    }
}

export interface SetTodo {
    type: constants.SET_TODO;
    payload: {
        id: number,
        text: string
    }
}

export interface ToggleTodo {
    type: constants.TOGGLE_TODO;
    payload: {
        id: number
    }
}

export interface FilterTodo {
    type: constants.FILTER_TODO;
    payload: {
        filter: string
    }
}

export type AppActions = AddTodo | DeleteTodo | EditTodo | SetTodo | ToggleTodo | FilterTodo;

//define actions

let todoId = 1;

export function add_todo(text: string): AddTodo {
    return {
        type: constants.ADD_TODO,
        payload: {
            text,
            id: todoId++
        }
    }
}

export function del_todo(id: number): DeleteTodo {
    return {
        type: constants.DELETE_TODO,
        payload: {
            id
        }
    }
}

export function edit_todo(id: number): EditTodo {
    return {
        type: constants.EDIT_TODO,
        payload: {
            id
        }
    }
}

export function set_todo(id: number, text: string): SetTodo {
    return {
        type: constants.SET_TODO,
        payload: {
            id,
            text
        }
    }
}

export function toggle_todo(id: number): ToggleTodo {
    return {
        type: constants.TOGGLE_TODO,
        payload: {
            id
        }
    }
}

export function filter_todo(filter: string): FilterTodo {
    return {
        type: constants.FILTER_TODO,
        payload: {
            filter
        }
    }
}