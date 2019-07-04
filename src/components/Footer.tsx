import React from 'react'
import Link from "./Link";
import {FILTER} from '../constants';
import Input from "./Input";

interface Props {
    filter: (filter: string) => void;
    submit: (text: string) => void;
    filterName: string
}

const Footer = ({filter, filterName, submit} : Props) => {
    return (
        <div>
            <Input submit={submit}/>
            <Link filter={filter} filterName={filterName} name={FILTER.ALL}/>
            <Link filter={filter} filterName={filterName} name={FILTER.ACTIVE}/>
            <Link filter={filter} filterName={filterName} name={FILTER.COMPLETED}/>
        </div>
    )
};

export default Footer