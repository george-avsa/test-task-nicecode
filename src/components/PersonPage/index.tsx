import { useState } from 'react';
import Content from './Content';
import Menu from './Menu';
import PersonControls from './PersonControls';
import './styles.sass';

function PersonPage({person}) {

    const [personControlsMenu, setPersonControlsMenu] = useState([
        {name: "Заметки", active: true},
        {name: "Консультации", active: false},
        {name: "Видео", active: false},
        {name: "Мероприятия", active: false},
    ]);

    return (
        <div className="person-page">
            <PersonControls person={person}></PersonControls>
            <Menu personControlsMenu={personControlsMenu} setPersonControlsMenu={setPersonControlsMenu} />
            <Content person={person} personControlsMenu={personControlsMenu}></Content>
        </div>
    );
}

export default PersonPage;