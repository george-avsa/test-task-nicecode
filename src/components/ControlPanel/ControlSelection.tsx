import { Person, PersonListItem } from "persons";
import Checkbox from "./../UI/Chekbox"
import { useEffect, useState } from "react";
import { isHtmlElement } from "./../../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { countSearched, selectPersons } from "./../../store/selectors";
import { setPersons } from "./../../store/personList";
import { toggleMode } from "./../../store/options";

const countSelected = (persons:PersonListItem[]) => {
    return persons.reduce((acc:any, person) => {
        if (person.selected) {  
            acc += 1
        }
        return acc
    }, 0)
}

function ControlSelection() {

    const selectMode = useSelector((state: RootState) => state.options.selectMode);
    const personAmount = useSelector(countSearched);
    const searchValue = useSelector((state: RootState) => state.options.search);
    const persons = useSelector(selectPersons);
    const dispatch = useDispatch();

    const handleClickSelection = () => {
        dispatch(toggleMode())
    }

    const [allSelected, setAllSelected] = useState<boolean>(false);

    const handleChecked = () => {
        const selectedPersons = persons.map((person:Person) => {
            return {...person, selected:false}
        })
        if (allSelected) {
            dispatch(setPersons(selectedPersons))
        }
        setAllSelected(!allSelected);
    }

    useEffect(() => {
        const selectedPersons:PersonListItem[] = persons.map(person => {
            return {...person, selected: true}
        })
        if (allSelected) {
            dispatch(setPersons(selectedPersons))
        }
    }, [allSelected]);

    useEffect(() => {
        setAllSelected(persons.every(person => {
            return person.selected;
        }))
    }, [persons]);

    useEffect(() => {
        const selectedPersons = persons.map(person => {
            return {...person, selected: false}
        })
        if (!selectMode) {
            dispatch(setPersons(selectedPersons))
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
                    {selectMode ? countSelected(persons) : (searchValue ? personAmount : persons.length)}
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