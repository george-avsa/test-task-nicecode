import ControlPanel from '../ControlPanel';
import PersonsList from './PersonsList';
// import './styles.sass';
import {Person} from './../../persons';
import ControlSelection from './../ControlPanel/ControlSelection';
import { useEffect, useMemo, useState } from 'react';

function Aside({
    persons, 
    setPersons,
    activePerson,
    handleClick,
    selectMode,
    setSelectMode,
}) {
    
    const [searchValue, setSearchValue] = useState<string>('');

    return (
        <aside>
            <ControlPanel
                searchValue={searchValue}
                setPersons={setPersons}
                setSearchValue={setSearchValue}
            />
            <ControlSelection 
                persons={persons}
                setPersons={setPersons}
                selectMode={selectMode}
                setSelectMode={setSelectMode}
                searchValue={searchValue}
            ></ControlSelection>
            <PersonsList 
                selectMode={selectMode}
                persons={persons} 
                searchValue={searchValue}
                activePerson={activePerson} 
                handleClick={handleClick}
            ></PersonsList>
        </aside>
    );
}

export default Aside;