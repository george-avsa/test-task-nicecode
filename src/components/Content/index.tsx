import PersonPage from './../PersonPage';
import Aside from './../Aside';
import './styles.sass';
import { useState } from 'react';
import { personsInitial } from './../../persons';

const isHtmlElement = (v: any): v is HTMLElement => v instanceof HTMLElement;

function Content() {
    const [persons, setPersons] = useState(personsInitial);
    const [activePerson, setActivePerson] = useState(personsInitial[0]);

    // слушатель выбора нового активного пользователя
    const handleClickPersonItem = (e:React.MouseEvent<HTMLButtonElement>) => {
        const clickedElement = e.target;
        // not null
        if (isHtmlElement(clickedElement)) {
            // пробуем найти родителя по классу, подбор будет идти по id, который задан
            // только для родительского блока, поэтому если клик произошел по дочернему элементу
            // нужно будет найти родительский, которму был присвоен id
            const listElement = clickedElement.closest('.persons-list__item');
            const id = listElement.getAttribute('id');
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
        }
    }

    return (
        <div className="wrapper">
            <div className="content">
                <Aside 
                    persons={persons} 
                    activePerson={activePerson} 
                    handleClick={handleClickPersonItem}
                ></Aside>
                <PersonPage image></PersonPage>
            </div>
        </div>
    );
}

export default Content;