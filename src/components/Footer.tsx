import React from 'react'
import Link from "./Link";
import {FILTER} from '../constants';
import Input from "./Input";

interface Props {
    actualFilter: string
    setFilter: (filter: string) => void;
    confirmInput: (text: string) => void;
}

const Footer = ({setFilter, actualFilter, confirmInput} : Props) => {
    return (
        <div>
            <Input confirmInput={confirmInput}/>
            <Link setFilter={setFilter} actualFilter={actualFilter} filterName={FILTER.ALL}/>
            <Link setFilter={setFilter} actualFilter={actualFilter} filterName={FILTER.ACTIVE}/>
            <Link setFilter={setFilter} actualFilter={actualFilter} filterName={FILTER.COMPLETED}/>
        </div>
    )
};

export default Footer