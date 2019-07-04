// @ts-check
import React from 'react'
import List from './containers/List'
import Footer from "./containers/Footer";
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    width: 500px;
    flex-direction: column;
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