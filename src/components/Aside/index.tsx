import ControlPanel from '../ControlPanel';
import PersonsList from './PersonsList';
import './styles.sass';
import {Person} from './../../persons';
import ControlSelection from './../ControlPanel/ControlSelection';
import { useState } from 'react';

function Aside({
    persons, 
    setPersons,
    activePerson,
    handleClick,
    selectMode,
    setSelectMode,
}) {
    

    return (
        <aside>
            <ControlPanel></ControlPanel>
            <ControlSelection 
                amount={persons.length} 
                persons={persons}
                setPersons={setPersons}
                selectMode={selectMode}
                setSelectMode={setSelectMode}
            ></ControlSelection>
            <PersonsList 
                selectMode={selectMode}
                persons={persons} 
                activePerson={activePerson} 
                handleClick={handleClick}
            ></PersonsList>
        </aside>
    );
}

export default Aside;