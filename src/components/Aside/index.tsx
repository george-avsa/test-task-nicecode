import ControlPanel from '../ControlPanel';
import PersonsList from './PersonsList';
import './styles.sass';
import {Person} from './../../persons';

function Aside({
    persons, 
    activePerson,
    handleClick,
}) {
    return (
        <aside>
            <ControlPanel></ControlPanel>
            <PersonsList 
                persons={persons} 
                activePerson={activePerson} 
                handleClick={handleClick}
            ></PersonsList>
        </aside>
    );
}

export default Aside;