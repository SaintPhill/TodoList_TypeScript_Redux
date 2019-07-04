import * as React from 'react';
import {ItemType} from "./List";
import styled from 'styled-components'

const DeleteBtn = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    padding: 0.25em 1em;
    `;
const EditBtn = styled(DeleteBtn)`
    border: 2px solid green;
`;

const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid grey;
`;

const ItemText = styled.span<{ complete?: boolean }>`
    text-decoration: ${(props) => props.complete ? "line-through" : "none"};
    vertical-align: top;
`;

const ItemForm = styled.form`
    display: inline
`;

const ItemFormInput = styled.input`
    width: 100px;
`;

interface Props {
    todo: ItemType;
    del: (index:number) => void;
    edit: (index: number) => void;
    handleTodo: (id: number, text: string) => void;
    toggleTodo: (id: number) => void;
}

export default function Item({todo, del, edit, handleTodo, toggleTodo}: Props) {
    function handleChanges(e:any) {
        e.preventDefault();
        handleTodo(todo.index, e.target.value)
    }
    return (
        <ItemWrapper>
            <div>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.index)}
                />
                <ItemText complete={todo.completed}>
                {!todo.edit ? todo.text :
                    <ItemForm onSubmit={() => edit(todo.index)}>
                        <ItemFormInput
                            autoFocus
                            value={todo.text}
                            onChange={(e) => handleChanges(e)}
                            onBlur={() => edit(todo.index)}
                        />
                    </ItemForm>}
               </ItemText>
            </div>
            <div>
                <DeleteBtn onClick={() => del(todo.index)}>Delete</DeleteBtn>
                <EditBtn disabled={todo.edit} onClick={() => edit(todo.index)}>Edit</EditBtn>
            </div>
        </ItemWrapper>
    )
}