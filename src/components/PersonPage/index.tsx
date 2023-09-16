import { useState } from 'react';
import Content from './Content';
import PersonControls from './Menu/PersonControls';
import Menu from './Menu/Menu';

function PersonPage() {

    const [personControlsMenu, setPersonControlsMenu] = useState([
        {name: "Заметки", active: true},
        {name: "Консультации", active: false},
        {name: "Видео", active: false},
        {name: "Мероприятия", active: false},
    ]);

    return (
        <div className="person-page">
            <PersonControls></PersonControls>
            <Menu personControlsMenu={personControlsMenu} setPersonControlsMenu={setPersonControlsMenu} />
            <Content personControlsMenu={personControlsMenu}></Content>
        </div>
    );
}

export default PersonPage;