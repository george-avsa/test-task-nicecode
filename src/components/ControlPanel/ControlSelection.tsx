import { Person } from "persons";
import Checkbox from "./../UI/Chekbox"
import { useEffect, useState } from "react";
import { isHtmlElement } from "./../../types";

interface Props {
    searchValue: string,
    selectMode: boolean,
    persons: Person[],
    setSelectMode: React.Dispatch<React.SetStateAction<boolean>>
    setPersons: React.Dispatch<React.SetStateAction<Person[]>>
}

const countSelected = (persons:Person[]) => {
    return persons.reduce((acc:any, person) => {
        if (person.selected) {  
            acc += 1
        }
        return acc
    }, 0)
}

const countSearched = (persons: Person[], searchValue:string) => {
    return persons.reduce((acc:any, person) => {
        if (person.lastName.includes(searchValue) 
        || person.firstName.includes(searchValue)) {
            acc += 1
        }
        return acc
    }, 0)
}

function ControlSelection({
    persons,
    setPersons,
    selectMode,
    setSelectMode,
    searchValue,
}:Props) {

    const handleClickSelection = () => {
        setSelectMode(!selectMode)
    }

    const [allSelected, setAllSelected] = useState<boolean>(false);

    const handleChecked = () => {
        if (allSelected) {
            setPersons(persons.map((person:Person) => {
                return {...person, selected:false}
            }))
        }
        setAllSelected(!allSelected);
    }

    useEffect(() => {
        if (allSelected) {
            setPersons(persons.map(person => {
                return {...person, selected: true}
            }))
        }
    }, [allSelected]);

    useEffect(() => {
        setAllSelected(persons.every(person => {
            return person.selected;
        }))
    }, [persons]);

    useEffect(() => {
        if (!selectMode) {
            setPersons(persons.map(person => {
                return {...person, selected: false}
            }))
        }
    }, [selectMode])

    return (
        <div className="control-selection">
            <div className="control-selection__right">
                {selectMode && <>
                    <Checkbox checked={allSelected} onChange={handleChecked} htmlFor="all" />
                    <span className="control-selection__text">
                        Все
                    </span>
                </>}
                <span className={`control-selection__amount ${selectMode ? 'control-selection__amount--select' : ''}`}>
                    {selectMode ? countSelected(persons) : (searchValue ? countSearched(persons, searchValue) : persons.length)}
                </span>
            </div>
            <div>
                {selectMode && <span className="control-selection__select">Действия</span>}
                <span className="control-selection__select" onClick={() => handleClickSelection()}>{!selectMode ? 'Выбрать' : 'Отменить'}</span>
            </div>
        </div>
    );
}

export default ControlSelection;