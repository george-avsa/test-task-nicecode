import {ReactComponent as TelegramIcon} from './../../assets/telegram.svg';

function PersonItem({
    person, 
    active=false,
    handleClick,
}) {
    return (
        <div className="persons-list__item" id={person.id} onClick={(e) => handleClick(e)}>
            {active && <div className="persons-list__active"></div>}
            <img 
                className="person-item__avatar" 
                src={`./images/avatars/${person.avatar ? person.avatar : 'default.svg'}`} 
            />
            <span className="person-item__name">{`${person.firstName} ${person.lastName}`}</span>
            {person.telegram && 
                <TelegramIcon className='person-item__telegram' />
            }
        </div>
    );
}

export default PersonItem;