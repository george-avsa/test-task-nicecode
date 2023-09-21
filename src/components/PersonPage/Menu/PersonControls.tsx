import { Person } from "./../../../persons";
import {ReactComponent as MoreIcon} from "./../../../assets/more.svg"
import Icon from "../../UI/Icon";
import PersonDropdown from "./PersonDropdown";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./../../../store";

function PersonControls() {

    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const person:Person = useSelector((state: RootState) => state.personDetails);

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
            {(!!Object.keys(person).length) && (
            <>
                <div className="person-page__avatar">
                    <img src={`./images/avatars/${person.avatar}`} alt="" />
                </div>
                <div className="person-page__info">
                    <h2 className="person-page__name">{`${person.firstName} ${person.lastName}`}</h2>
                    <span className="person-page__description">30 лет, муж</span>
                </div>
                <Icon className="person-page__more" dropdownRef={dropdownRef}>
                    {dropdown && <PersonDropdown setDropdown={setDropdown} />}
                    <MoreIcon />
                </Icon>
            </>
            )}
        </div>
    );
}

export default PersonControls;