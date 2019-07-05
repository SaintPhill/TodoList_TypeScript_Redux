import {StoreState, FilterState} from "../types";
import {Dispatch} from "react";
import * as actions from '../actions/';
import {connect} from "react-redux";
import {ItemType, List} from "../components/List";
import {FILTER} from "../constants";

function getVisibleTodoList(todos: any, filter: FilterState) {
    switch (filter) {
        case FILTER.ALL:
            return todos;
        case FILTER.ACTIVE:
            return todos.filter((todo : ItemType) => !todo.isCompleted);
        case FILTER.COMPLETED:
            return todos.filter((todo : ItemType) => todo.isCompleted)
    }
}

function mapStateToProps({todos, filter}: StoreState) {
    return {
        todos: getVisibleTodoList(todos, filter)
    }
}

function mapDispatchToProps(dispatch: Dispatch<actions.AppActions>) {
    return {
        del: (id:number) => dispatch(actions.del_todo(id)),
        edit: (id:number) => dispatch(actions.edit_todo(id)),
        handleTodo: (id: number, text: string) => dispatch(actions.set_todo(id, text)),
        toggleTodo: (id: number) => dispatch(actions.toggle_todo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)