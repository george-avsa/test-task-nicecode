import Checkbox from './../UI/Chekbox';
import {ReactComponent as TelegramIcon} from './../../assets/telegram.svg';
import {ReactComponent as WarningIcon} from './../../assets/Mod.svg';
import { isHtmlElement } from './../../types';
import { useDispatch, useSelector } from 'react-redux';
import { selectPersons } from './../../store/selectors';
import { getPersonDetails } from './../../store/personDetails';
import store, { RootState } from './../../store';
import { setPersons } from './../../store/personList';

function PersonItem({
    person, 
    active=false,
}) {
    const selectMode = useSelector((state: RootState) => state.options.selectMode);

    const persons = useSelector(selectPersons);
    const allPersons = useSelector((state: RootState) => state.personList);
    const dispatch = useDispatch<typeof store.dispatch>();

    // слушатель выбора нового активного пользователя
    const handleClickPersonItem = (e:React.MouseEvent<HTMLDivElement>) => {
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
                        dispatch(getPersonDetails(person.id));
                    }
                })
                // в случае неудачного поиска, активный элемент станет первый элемент списка
                if (!newActivate) {
                    dispatch(getPersonDetails('denis1'));
                }
            } else {
                // если поля можно выбрать, тогда при клике будет меняться выбор person
                const activePersons = allPersons.map(person => {
                    if (person.id === id) {
                        return {...person, selected: !person.selected}
                    }
                    return person
                })
                dispatch(setPersons(activePersons))
            }
        }
    }

    return (
        <div className="persons-list__item" id={person.id} onClick={(e) => handleClickPersonItem(e)}>
            {active && <div className="persons-list__item--active"></div>}
            {selectMode && (
                <Checkbox checked={person.selected} className="person-item__checkbox" htmlFor={person.id}/>
            )}
            <img 
                className="person-item__avatar" 
                src={`./images/avatars/${person.avatar ? person.avatar : 'default.svg'}`} 
            />
            <span className="person-item__name">{`${person.firstName} ${person.lastName}`}</span>
            {person.telegram && 
                <TelegramIcon className='person-item__telegram' />
            }
            {person.warning && 
                <WarningIcon className='person-item__warning' />
            }
        </div>
    );
}

export default PersonItem;