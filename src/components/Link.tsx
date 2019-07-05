import React from 'react'
import styled from "styled-components";

interface Props {
    setFilter: (filter: string) => void;
    filterName: string;
    actualFilter: string
}

const StyledLink = styled.a<{selected?: boolean}>`
    margin-right: 10px;
    text-decoration: ${props => props.selected ? 'underline' : 'none'};
    
`;

const Link = ({setFilter, actualFilter, filterName} :Props) => {
    return (
        <StyledLink
            selected={filterName === actualFilter}
            href="#"
            onClick={() => setFilter(filterName)}
        >
            {filterName.toLocaleLowerCase()}
        </StyledLink>
    )
};
export default Link