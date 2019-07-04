// @ts-check
import React from 'react'
import List from './containers/List'
import Footer from "./containers/Footer";
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 500px;
    margin: auto;
`;

export function App() {
    return (
        <Wrapper>
            <h1>Your todo-list</h1>
            <List />
            <Footer/>
        </Wrapper>
    )
}