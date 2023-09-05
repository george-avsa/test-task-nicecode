import Checkbox from './../UI/Chekbox';
import {ReactComponent as TelegramIcon} from './../../assets/telegram.svg';
import {ReactComponent as WarningIcon} from './../../assets/Mod.svg';

function PersonItem({
    person, 
    active=false,
    handleClick,
    selectMode,
}) {
    return (
        <div className="persons-list__item" id={person.id} onClick={(e) => handleClick(e)}>
            {active && <div className="persons-list__active"></div>}
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