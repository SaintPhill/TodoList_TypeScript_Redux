import React from 'react'
import styled from "styled-components";

interface Props {
    filter: (filter: string) => void;
    name: string;
    filterName: string
}

const StyledLink = styled.a<{selected?: boolean}>`
    margin-right: 10px;
    text-decoration: ${props => props.selected ? 'underline' : 'none'};
    
`;

const Link = ({filter, filterName, name} :Props) => {
    return (
        <StyledLink
            selected={name === filterName}
            href="#"
            onClick={() => filter(name)}
        >
            {name.toLocaleLowerCase()}
        </StyledLink>
    )
};
export default Link