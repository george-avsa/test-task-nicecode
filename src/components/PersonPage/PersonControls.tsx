import { Person } from "persons";
import {ReactComponent as MoreIcon} from "./../../assets/more.svg"
import Icon from "./../UI/Icon";
import PersonDropdown from "./PersonDropdown";
import { useEffect, useRef, useState } from "react";
import { isHtmlElement } from "./../../types";

function PersonControls({person}:{person:Person}) {

    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let timerId: any;
        if (dropdownRef.current !== null) {
            dropdownRef.current.addEventListener('mouseover', () => {
                if (timerId) {
                    clearTimeout(timerId);
                }
                setDropdown(true)
                
            });
            
            dropdownRef.current.addEventListener('mouseout', () => {
                timerId = setTimeout(() => {
                    setDropdown(false)
                }, 500);
            });
        }
        }, [dropdownRef])
        
    return (
        <div className="person-page__controls">
            <div className="person-page__avatar">
                <img src={`./images/avatars/${person.avatar}`} alt="" />
            </div>
            <div className="person-page__info">
                <h2 className="person-page__name">{`${person.firstName} ${person.lastName}`}</h2>
                <span className="person-page__description">30 лет, муж</span>
            </div>
            <Icon className="person-page__more" dropdownRef={dropdownRef}>
                {dropdown && <PersonDropdown />}
                <MoreIcon />
            </Icon>
        </div>
    );
}

export default PersonControls;