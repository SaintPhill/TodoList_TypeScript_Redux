import { AppActions } from '../actions';
import { TodoState, FilterState } from '../types';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, FILTER_TODO, SET_TODO, TOGGLE_TODO, FILTER } from '../constants';
import { combineReducers } from "redux";

const initState = [{text: 'qweqwe', index: 0, isEdit: false, isCompleted: false}];


export function todos(state: TodoState = initState, action: AppActions): TodoState {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {index: action.payload.id, text: action.payload.text, isEdit: false, isCompleted: false}];

        case DELETE_TODO:
            return state.filter((todo) => todo.index !== action.payload.id);

        case EDIT_TODO:
            return state.map((todo) => todo.index === action.payload.id ? {...todo, isEdit: !todo.isEdit} : todo);

        case SET_TODO:
            return state.map((todo) => todo.index === action.payload.id ? {...todo, text: action.payload.text} : todo);

        case TOGGLE_TODO:
            return state.map((todo) => todo.index === action.payload.id ? {...todo, isCompleted: !todo.isCompleted} : todo);

        default:
            return state;
    }
}

export function filter(state: FilterState = FILTER.ALL, action: AppActions) {
    switch (action.type) {
        case FILTER_TODO:
            return action.payload.filter;

        default:
            return state
    }
}

export const rootState = combineReducers({todos, filter});