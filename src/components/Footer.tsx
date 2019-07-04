import React from 'react'
import Link from "./Link";
import {FILTER} from '../constants';
import Input from "./Input";

interface Props {
    filter: (filter: string) => void;
    submit: (text: string) => void
}

const Footer = ({filter, submit} : Props) => {
    return (
        <div>
            <Input submit={submit}/>
            <Link filter={filter} name={FILTER.ALL}/>
            <Link filter={filter} name={FILTER.ACTIVE}/>
            <Link filter={filter} name={FILTER.COMPLETED}/>
        </div>
    )
};

export default Footer