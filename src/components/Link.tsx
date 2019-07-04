import React from 'react'

interface Props {
    filter: (filter: string) => void;
    name: string
}

const Link = ({filter, name} :Props) => {
    return (
        <a href="#" onClick={() => filter(name)}>{name.toLocaleLowerCase()}</a>
    )
};
export default Link