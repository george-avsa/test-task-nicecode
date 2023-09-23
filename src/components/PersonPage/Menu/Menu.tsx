import { Fragment, useEffect, useState } from "react";
import MenuDivider from "./MenuDivider";
import MenuItem from "./MenuItem";
import Icon from "./../../UI/Icon";
import {ReactComponent as PlusIcon} from './../../../assets/smallPlus.svg'
import { isHtmlElement } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../../../store";
import { setModal, setPersonControlsMenu } from "./../../../store/options";

interface MenuItem {
    name: string,
    active: boolean
}

function Menu() {

    const [buttonName, setButtonName] = useState('Новая заметка');
    const dispatch = useDispatch();
    const personControlsMenu = useSelector((state: RootState) => state.options.personControlsMenu);

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
            dispatch(setPersonControlsMenu(personControlsMenu.map((menuItem:MenuItem) => {
                if (menuItem?.name === clickedElement?.innerText) {
                    return {...menuItem, active: true}
                }
                return {...menuItem, active: false}
            })))
        }
    }

    const handleClickNew = (e: React.MouseEvent<HTMLDivElement>) => {
        const clickedElement = e.target;
        if (isHtmlElement(clickedElement)) {
            dispatch(setModal({type: 'formNote', closed: false}))
        }
    };

    return (
        <div className="person-page__menu">
            {personControlsMenu.map((menuItem:MenuItem, i:number) => {
                return <Fragment key={i}>
                    <MenuItem active={menuItem.active} handleClickMenu={handleClickMenu}>{menuItem.name}</MenuItem>
                    {(i !== personControlsMenu.length - 1) && <MenuDivider />}
                </Fragment>
            }
        )}
        <div className="person-page__new" onClick={handleClickNew}>
            <MenuItem>{buttonName}</MenuItem>
            <Icon className="menu__plus"><PlusIcon/></Icon>
        </div>
        </div>
    );
}

export default Menu;