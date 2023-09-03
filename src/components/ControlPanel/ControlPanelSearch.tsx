import Icon from '../UI/Icon';
import {ReactComponent as SearchIcon} from './../../assets/search.svg';
import {ReactComponent as CrossIcon} from './../../assets/cross.svg';
import { useState } from 'react';
import { isHtmlElement } from './../../types';

function ControlPanelSearch({
    setSearchOpened, 
    setPersons,
    searchValue,
    setSearchValue,
}) {

    const handleClickSearch = () => {
        setSearchOpened(false);
        setSearchValue('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isHtmlElement(e.target)) {
            setSearchValue(e.target.value);
        }
    }

    return (
        <>
            <SearchIcon className='search--icon'/>
            <input className='search' type="text" value={searchValue} onChange={handleChange} />
            <Icon  onClick={handleClickSearch}><CrossIcon /></Icon>
        </>
    );
}

export default ControlPanelSearch;