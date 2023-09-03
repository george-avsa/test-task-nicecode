import PersonPage from './../PersonPage';
import Aside from './../Aside';
import './styles.sass';
import { useState } from 'react';
import { Person, personsInitial } from './../../persons';
import { isHtmlElement } from './../../types';

function Content() {
    const [persons, setPersons] = useState<Person[]>(personsInitial);
    const [activePerson, setActivePerson] = useState<Person>(personsInitial[0]);

    const [selectMode, setSelectMode] = useState<boolean>(false);

    // слушатель выбора нового активного пользователя
    const handleClickPersonItem = (e:React.MouseEvent<HTMLButtonElement>) => {
        const clickedElement = e.target;
        // not null
        if (isHtmlElement(clickedElement)) {
            const listElement = clickedElement.closest('.persons-list__item');
            const id = listElement.getAttribute('id');
            if (!selectMode) {

                // пробуем найти родителя по классу, подбор будет идти по id, который задан
                // только для родительского блока, поэтому если клик произошел по дочернему элементу
                // нужно будет найти родительский, которму был присвоен id
                let newActivate = false;
                persons.forEach(person => {
                    if (person.id === id) {
                        newActivate = true;
                        setActivePerson(person);
                    }
                })
                // в случае неудачного поиска, активный элемент станет первый элемент списка
                if (!newActivate) {
                    setActivePerson(personsInitial[0]);
                }
            } else {
                // если поля можно выбрать, тогда при клике будет меняться выбор person
                setPersons(persons.map(person => {
                    if (person.id === id) {
                        return {...person, selected: !person.selected}
                    }
                    return person
                }))
            }
        }
    }

    return (
        <div className="wrapper">
            <div className="content">
                <Aside 
                    persons={persons} 
                    setPersons={setPersons}
                    activePerson={activePerson} 
                    handleClick={handleClickPersonItem}
                    selectMode={selectMode}
                    setSelectMode={setSelectMode}
                ></Aside>
                <PersonPage image></PersonPage>
            </div>
        </div>
    );
}

export default Content;