import * as React from 'react';
import Item from './Item'
import styled from "styled-components";

const ItemsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 300px;
`;

export interface ItemType {
    index: number;
    text: string;
    edit: boolean;
    completed: boolean;
}

interface Props {
    todos: Array<ItemType>;
    del: (index: number) => void;
    edit: (index: number) => void;
    handleTodo: (id: number, text: string) => void;
    toggleTodo: (id: number) => void;
}

export function List({todos, del, edit, handleTodo, toggleTodo} : Props) {
    return (
            <ItemsWrap>
                {todos.map(todo => {
                    return <Item
                        key={todo.index}
                        todo={todo}
                        del={del}
                        edit={edit}
                        handleTodo={handleTodo}
                        toggleTodo={toggleTodo}
                           />
                })}
            </ItemsWrap>
    )
}