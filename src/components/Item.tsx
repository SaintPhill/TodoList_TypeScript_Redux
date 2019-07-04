import * as React from 'react';
import {ItemType} from "./List";
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    `;

interface Props {
    todo: ItemType;
    del: (index:number) => void;
    edit: (index: number) => void;
    handleTodo: (id: number, text: string) => void;
    toggleTodo: (id: number) => void;
}

export default function Item({todo, del, edit, handleTodo, toggleTodo}: Props) {
    console.log(todo.edit)
    function handleChanges(e:any) {
        e.preventDefault();
        handleTodo(todo.index, e.target.value)
    }
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.index)}
            />
            <span style={todo.completed ? {color: 'red'} : {}}>
                {!todo.edit ? todo.text :
                    <form onSubmit={() => edit(todo.index)} style={{display: 'inline'}}>
                        <input
                            autoFocus
                            style={{width: '100px'}}
                            value={todo.text}
                            onChange={(e) => handleChanges(e)}
                            onBlur={() => edit(todo.index)}
                        />
                    </form>}
             </span>
            <Button className={'float waves-effect waves-light btn'}
                    onClick={() => del(todo.index)}>delTodo
            </Button>
            {!todo.edit && <Button className={'float waves-effect waves-light btn'}
                                   onClick={() => edit(todo.index)}>editTodo
            </Button>}
        </div>
    )
}