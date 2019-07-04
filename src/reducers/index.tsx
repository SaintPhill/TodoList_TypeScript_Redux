import { AppActions } from '../actions';
import { TodoState, FilterState, StoreState } from '../types';
import {ADD_TODO, DELETE_TODO, EDIT_TODO, FILTER_TODO, SET_TODO, TOGGLE_TODO, FILTER} from '../constants';
import { ItemType } from '../components/List'
import {combineReducers} from "redux";

const initState = [{text: 'qweqwe', index: 0, edit: false, completed: false}]


export function todos(state: TodoState = initState, action: AppActions): TodoState {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {index: action.payload.id, text: action.payload.text, edit: false, completed: false}];

        case DELETE_TODO:
            return state.filter((todo: ItemType) => todo.index !== action.payload.id);

        case EDIT_TODO:
            return state.map((todo: ItemType) => todo.index === action.payload.id ? {...todo, edit: !todo.edit} : todo);

        case SET_TODO:
            return state.map((todo: ItemType) => todo.index === action.payload.id ? {...todo, text: action.payload.text} : todo);

        case TOGGLE_TODO:
            return state.map((todo: ItemType) => todo.index === action.payload.id ? {...todo, completed: !todo.completed} : todo)

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