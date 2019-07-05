import {ItemType} from "../components/List";


export type TodoState = ItemType[];
export type FilterState = string;

export type StoreState = {
    todos: TodoState,
    filter: FilterState
};