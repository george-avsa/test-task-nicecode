import { useState } from "react";
import MenuDivider from "./MenuDivider";
import MenuItem from "./MenuItem";
import Icon from "./../UI/Icon";
import {ReactComponent as PlusIcon} from './../../assets/smallPlus.svg'

function Menu() {

    const [personControlsMenu, setPersonControlsMenu] = useState([
        {name: "Заметки", active: true},
        {name: "Консультации", active: false},
        {name: "Видео", active: false},
        {name: "Мероприятия", active: false},
    ]);

    return (
        <div className="person-page__menu">
            {personControlsMenu.map((menuItem, i) => {
                return <>
                    <MenuItem active={menuItem.active}>{menuItem.name}</MenuItem>
                    {(i !== personControlsMenu.length - 1) && <MenuDivider />}
                </>
            }
        )}
        <div className="person-page__new">
            <MenuItem>Новая заметка</MenuItem>
            <Icon className="menu__plus"><PlusIcon/></Icon>
        </div>
        </div>
    );
}

export default Menu;