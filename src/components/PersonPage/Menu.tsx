import { useEffect, useState } from "react";
import MenuDivider from "./MenuDivider";
import MenuItem from "./MenuItem";
import Icon from "./../UI/Icon";
import {ReactComponent as PlusIcon} from './../../assets/smallPlus.svg'
import { isHtmlElement } from "./../../types";

interface MenuItem {
    name: string,
    active: boolean
}

function Menu({personControlsMenu, setPersonControlsMenu}) {

    const [buttonName, setButtonName] = useState('Новая заметка');

    useEffect(() => {
        const name = personControlsMenu.find(menuItem => menuItem.active).name;
        if (name === 'Заметки') {
            setButtonName('Новая заметка')
        } else if (name === 'Консультации') {
            setButtonName('Записать')
        } else if (name === 'Видео') {
            setButtonName('Рекомендовать')
        } else if (name === 'Видео') {
            setButtonName('Рекомендовать')
        }
    }, [personControlsMenu])

    const handleClickMenu = (e:React.MouseEvent<HTMLSpanElement>) => {
        const clickedElement = e.target;
        if (isHtmlElement(clickedElement)) {
            setPersonControlsMenu(personControlsMenu.map((menuItem:MenuItem) => {
                if (menuItem?.name === clickedElement?.innerText) {
                    return {...menuItem, active: true}
                }
                return {...menuItem, active: false}
            }))
        }
    }

    return (
        <div className="person-page__menu">
            {personControlsMenu.map((menuItem:MenuItem, i:number) => {
                return <>
                    <MenuItem active={menuItem.active} handleClickMenu={handleClickMenu} >{menuItem.name}</MenuItem>
                    {(i !== personControlsMenu.length - 1) && <MenuDivider />}
                </>
            }
        )}
        <div className="person-page__new">
            <MenuItem>{buttonName}</MenuItem>
            <Icon className="menu__plus"><PlusIcon/></Icon>
        </div>
        </div>
    );
}

export default Menu;